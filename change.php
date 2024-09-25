<?php
$servername = "localhost";
$username = "root"; 
$password = "";
$database = "6khomes";
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$email = $_POST["email"];
$pw=$_POST["password"];
$cpw=$_POST["confirm_password"];
$sql = "SELECT * FROM `6khomesregisterations` WHERE email = '$email'";
$result = $conn->query($sql);
if ($result->num_rows == 0) {
    header("Location: changepassword.html?message=Email does not exist in the database.");
}
else{
    if($pw===$cpw){
        $sql1="update `6khomesregisterations` set password='$cpw' where email='$email';";
        if($conn->query($sql1)===true){
            header("Location: Loginpage.html?message=Password upadated successfully");
        }
        else{
            header("Location: changepassword.html?message=Password not upadated");
        }
    }
    else{
        header("Location: changepassword.html?message=Passwords did not match");
    }
}
$conn->close();
?>