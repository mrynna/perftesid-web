<?php 
session_start();
require 'connection.php';

if (isset($_POST['email']) && isset($_POST['password'])) {	
	$email = trim($_POST['email']);
	$password = trim($_POST['password']);

	if (empty($email)) {
		header("Location: login.php?error=" . urlencode("Email is required"));
		exit();
	} elseif (empty($password)){
		header("Location: login.php?error=" . urlencode("Password is required") . "&email=" . urlencode($email));
		exit();
	} else {
		$stmt = $dbconnect->prepare("SELECT * FROM users WHERE email=?");
		$stmt->bind_param("s", $email);
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
			
			if ($email === $user_email) {
				if (password_verify($password, $user_password)) {
					$_SESSION['user_id'] = $user_id;
					$_SESSION['user_email'] = $user_email;
					$_SESSION['user_username'] = $user_username;
					$_SESSION['user_type'] = $user_type;
					$_SESSION['user_token'] = $user_token;
					header("Location: ../index.php");
					exit();
				} else {
					header("Location: login.php?error=" . urlencode("Incorrect Email or 1") . "&email=" . urlencode($email));
					exit();
				}
			} else {
				header("Location: login.php?error=" . urlencode("Incorrect Email or 2") . "&email=" . urlencode($email));
				exit();
			}
		} else {
			header("Location: login.php?error=" . urlencode("Incorrect Email or 3") . "&email=" . urlencode($email));
			exit();
		}
	}
}
