    <?php
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
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["image"]["name"]);
        move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);
        $message = "Flat details submitted successfully! Our representative will contact you very soon.";
    }
    ?>