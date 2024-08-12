<?php
    include 'dbconnect.php';
    if($_SERVER["REQUEST_METHOD"]  == "POST"){
        $fname = $_POST['username'];
        $phonenumber = $_POST['pnumber'];
        $password = $_POST['password'];
        $cpassword = $_POST['cpassword'];
        $sql = "SELECT * FROM `userdata` WHERE `username` = '$username'";
        $result = mysqli_query($conn , $sql);
        $num = mysqli_num_rows($result);

        if($num > 0){
            $err = "Username is already excits"

        }
        else{
            if($password == $cpassword){
                $inserted = "INSERT INTO `userdata` (`username`, `phonenumber`, `password`) VALUES ('$username','$phonenumber', '$password')";
                $result = mysqli_query($conn , $inserted);
                echo"inserted";
            }
            else{
            $err = "Invalid Password"
            }
        }
    }
?>