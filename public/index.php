<?php
$insert = false;

if(isset($_POST['name'])){

    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "trip";

    $con = mysqli_connect($server, $username, $password, $database);

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $name   = $_POST['name'];
        $age    = $_POST['age'];
        $gender = $_POST['gender'];
        $email  = $_POST['email'];
        $phone  = $_POST['phone'];
        $other  = isset($_POST['other']) ? $_POST['other'] : '';

        $sql = "INSERT INTO trip (name, age, gender, email, phone, other, dt)
                VALUES ('$name', '$age', '$gender', '$email', '$phone', '$other', current_timestamp())";

        if (mysqli_query($con, $sql)) {
            $insert = true;
        } else {
            echo "Error: " . mysqli_error($con);
        }
    }

    $con->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TripFlow</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="container">
        <h3>Welcome to IIT kharagpur Travel Form</h3>
        <p>Enter your Details and Submit This Formsto Conform your participation in the trip</p>
        <?php
            if($insert == true){
                echo "<p class=\"submitMsg\">Thank you for submitting your form! We are happy to see you joining the US trip</p>";  
            }
        ?>
        <form action="index.php" method="post" >
            <input type="text" name="name" id="name" placeholder="Enter your Name">
            <input type="text" name="age" id="age" placeholder="Enter your Age">
            <input type="text" name="gender" id="gender" placeholder="Enter your Gender">
            <input type="email" name="email" id="email" placeholder="Enter your Email">
            <input type="phone" name="phone" id="phone" placeholder="Enter your Phone Number"> 
            <textarea name="other" id="other" cols="30" rows="10" placeholder="Enter any other information here"></textarea>
            <button class="btn">Submit</button>
            <button class="btn">Reset</button>  
        </form>
    </div>
    <script src="index.js"></script>
</body>
</html>