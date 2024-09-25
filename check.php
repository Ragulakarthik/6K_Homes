<?php
// Create connection
$conn = new mysqli('localhost','root','','6khomes');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$email=$_POST['email'];
$password=$_POST['password'];
$sql = "SELECT * FROM 6khomesregisterations WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    header("Location: 6KHomes.html?message=Login Successful");
    exit();
} 
else{
    header("Location: Loginpage.html?message=Invalid Credentials");
}
$conn->close();
?>
