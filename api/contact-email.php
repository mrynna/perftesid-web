<?php

 
if($_POST["message"]) {

 
mail("muhrianardiansah@gmail.com", "Here is the subject line",

 
$_POST["insert your message here"]. "From: an@email.address");

 
}

 
?>