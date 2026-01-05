<?php
$host = "sql202.infinityfree.com";
$user = "if0_XXXXXXX";
$pass = "YOUR_DB_PASSWORD";
$db   = "if0_XXXXXXX_tripflow";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Database connection failed");
}
?>
