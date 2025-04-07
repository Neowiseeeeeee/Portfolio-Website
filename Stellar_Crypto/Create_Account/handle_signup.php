<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "stellar_users";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (first_name, last_name, tel, email, username, password, gender, address, birthday) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssss", $first_name, $last_name, $tel, $email, $username, $hashed_password, $gender, $address, $birthday);

// Set parameters and execute
$first_name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
$gender = $_POST['gender'];
$address = $_POST['address'];
$birthday = $_POST['birthday'];

// Hash the password before storing it
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
