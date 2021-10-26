<?php
//session_start();
//if(isset($_SESSION['unique_id'])){
//    header("location: users.php");
//}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Time Chat Application</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    
</head>
<body>
    <div class="wrapper">
        <section class="form login ">
            <header>Real time Chat Application</header>
            <form action="#" autocomplete="off">
                <div class="error-txt"></div>
                    <div class="field input">
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="Enter your email address">
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type="password" name="pswd" placeholder="Enter your password">
                        <i class="fas fa-eye"></i>
                    </div>
                   
                    <div class="field button">
                        <input type="Submit" value="Continue to chat">
                    </div> 

            </form>
            <div class="link">Not yet signed up? <a href="index.php">Signup</a></div>
        </section>
    </div>

    <script src="javascript/login.js"></script>
    <script src="javascript/showpass.js"></script>
</body>
</html>