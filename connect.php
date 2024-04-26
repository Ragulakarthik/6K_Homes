<?php
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    //database connection
    $conn = new mysqli('localhost','root','','6khomes');
    if($conn->connect_error){
        die('Connection Failed  :'.$conn->connect_error);
    }
    else{
        $sql="insert into 6khomesregisterations(username, email, password) values('$username','$email','$password')";
        if ($conn->query($sql) === TRUE) {
            header("Location: 6KHomes.html");
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
    }
?>