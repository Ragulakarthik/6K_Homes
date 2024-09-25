<?php
$servername="localhost";
$username="root";
$password="";
$database="flat_details";
$con=mysqli_connect($servername,$username,$password,$database);
if(!$con){
    die("connection failed :".mysqli_error($con));
}
$message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $address = $_POST['address'];
    $bedrooms = $_POST['bedrooms'];
    $bathrooms = $_POST['bathrooms'];
    $square_footage = $_POST['square_footage'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $sql = "INSERT INTO flats (address, bedrooms, bathrooms, square_footage, price, description, name, email, phone)
            VALUES ('$address', $bedrooms, $bathrooms, $square_footage, $price, '$description', '$name', '$email', '$phone')";
    if (mysqli_query($con, $sql)) {
        header("Location: 6KHomes.html?message=Flat details submitted successfully! Our representative will contact you very soon.");
    } else {
        $message = "Error: " . mysqli_error($con);
    }
}
?>
<?php
    echo $message;
?>