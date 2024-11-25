<?php
$insert = false;
if(isset($_POST['Name'])){
    // Set connection variables
    $server = "localhost";
    $username = "root";
    $password = "";

    // Create a database connection
    $con = mysqli_connect($server, $username, $password);

    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    // echo "Success connecting to the db";

    // Collect post variables
    @$Name = $_POST['Name'];
    @$Email = $_POST['Email'];

    $sql = "INSERT INTO `project`.`table_name` (`Name`, `Email`) VALUES ('$Name', '$Email')";
    // echo $sql;

//     // Execute the query
    if($con->query($sql) == true){
        // echo "Successfully inserted";

        // Flag for successful insertion
        $insert = true;
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }

    // Close the database connection
    $con->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration form</title>
    <link rel="stylesheet" href="Register.css">
</head>

<body>
    <marquee direction="left"><h1>Register yourself for better experience</h1></marquee>
    <?php
        if($insert == true){
            echo "<h1 style='color:rgb(98, 226, 43); text-align:center;'>Thanks for submiting the form......</h1>";
        }
        ?>
    <div class="form-container">
    <form action="index.php" method="post">
        <p>Name</p>
        <input type="text" class="search-input" name="Name" placeholder="Enter your name here">
        <p>Email</p>
        <input type="email" class="search-input" name="Email" placeholder="Enter your email here">
        <!-- <p>Gender</p> -->
        <!-- <input type="gender" class="search-input" name="gender" placeholder="Enter your gender here">
        <p>Password</p>
        <input type="password" class="search-input" name="pass" placeholder="Enter your password here"> -->
        <div class="button-container">
            <button>Submit</button>
        </div>
        
      

     
    </form>
   
    
</div>
</body>
</html>
