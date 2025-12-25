<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$insert = false;
$error = "";

try {
     $host = "sql202.infinityfree.com";
    $user = "if0_40754731";
    $pass = "TripFlow2025";
    $db   = "if0_40754731_if0_40754731_trip2";

    $con = mysqli_connect($host, $user, $pass, $db);
    if (!$con) throw new Exception("Database connection failed: " . mysqli_connect_error());

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name   = htmlspecialchars(trim($_POST['name']));
        $age    = intval($_POST['age']);
        $gender = htmlspecialchars(trim($_POST['gender']));
        $email  = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
        $phone  = htmlspecialchars(trim($_POST['phone']));
        $other  = htmlspecialchars(trim($_POST['other']));

        if (!$email) $error = "Invalid email!";
        elseif ($age <= 0 || $age > 120) $error = "Invalid age!";
        else {
            $stmt = $con->prepare("INSERT INTO trip (name, age, gender, email, phone, other, dt) VALUES (?, ?, ?, ?, ?, ?, NOW())");
            $stmt->bind_param("sissss", $name, $age, $gender, $email, $phone, $other);
            if ($stmt->execute()) {
                $insert = true;
                echo "<script>console.log('Name: $name, Email: $email');</script>";
            } else {
                $error = "Form submission failed: " . $stmt->error;
            }
            $stmt->close();
        }
    }

} catch(Exception $e) {
    $error = $e->getMessage();
}

mysqli_close($con);
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TripFlow</title>
<link rel="stylesheet" href="style.css">
<style>
.container { max-width: 600px; margin: 50px auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px; }
input, textarea { width: 100%; margin-bottom: 15px; padding: 10px; border-radius: 5px; border: 1px solid #ccc; }
.btn { padding: 10px 20px; border: none; border-radius: 5px; background-color: #4CAF50; color: white; cursor: pointer; }
.btn:hover { background-color: #45a049; }
.submitMsg { color: green; font-weight: bold; }
.errorMsg { color: red; font-weight: bold; }
</style>
</head>
<body>

<div class="container">
    <h3>Welcome to IIT Kharagpur Travel Form</h3>
    <p>Enter your details and submit this form to confirm your participation in the trip.</p>

    <?php if ($insert): ?>
        <p class="submitMsg">✅ Thank you for submitting your form! We are happy to see you joining the US trip.</p>
    <?php elseif ($error): ?>
        <p class="errorMsg">❌ <?php echo $error; ?></p>
    <?php endif; ?>

    <form action="index.php" method="post">
        <input type="text" name="name" placeholder="Enter your Name" required>
        <input type="number" name="age" placeholder="Enter your Age" required>
        <input type="text" name="gender" placeholder="Enter your Gender" required>
        <input type="email" name="email" placeholder="Enter your Email" required>
        <input type="text" name="phone" placeholder="Enter your Phone Number" required>
        <textarea name="other" cols="30" rows="6" placeholder="Other information"></textarea>

        <button class="btn" type="submit">Submit</button>
        <button class="btn" type="reset">Reset</button>
    </form>
</div>

</body>
</html>
