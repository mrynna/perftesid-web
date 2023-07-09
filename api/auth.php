<?php
session_start();
require 'connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = trim($_POST['email']);
    $username = trim($_POST['email']);
    $password = trim($_POST['password']);

    if (empty($email) && empty($username)) {
        header("Location: ../login.php?error=" . urlencode("Email Address or Username is required") . "&email=" . urlencode($email));
        exit();
    } elseif (empty($password)) {
        header("Location: ../login.php?error=" . urlencode("Password is required") . "&email=" . urlencode($email) . "&username=" . urlencode($username));
        exit();
    } else {
        $stmt = $dbconnect->prepare("SELECT id, username, email, password, type, token FROM users WHERE email = ? OR username = ?");
        $stmt->bind_param("ss", $email, $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();

            $user_id = $user['id'];
            $user_username = $user['username'];
            $user_email = $user['email'];
            $user_password = $user['password'];
            $user_type = $user['type'];
            $user_token = $user['token'];

            if (password_verify($password, $user_password)) {
                $_SESSION['user_id'] = $user_id;
                $_SESSION['user_email'] = $user_email;
                $_SESSION['user_username'] = $user_username;
                $_SESSION['user_type'] = $user_type;
                $_SESSION['user_token'] = $user_token;
                header("Location: ../index.php");
                exit();
            } else {
                header("Location: ../login.php?error=" . urlencode("Incorrect Email, Username, or password") . "&email=" . urlencode($email) . "&username=" . urlencode($username));
                exit();
            }
        } else {
            header("Location: ../login.php?error=" . urlencode("Incorrect Email, Username, or password") . "&email=" . urlencode($email) . "&username=" . urlencode($username));
            exit();
        }
    }
}
