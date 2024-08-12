<?php
    include 'dbconnect.php';
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $phonenumber = $_POST['phonenumber'];
        $password = $_POST['password'];
        $sql = "SELECT * FROM `userdata` WHERE `phonenumber` = '$password' AND `phonenumber` = '$phonenumber'";
        
        $result = mysqli_query($conn , $sql);
        $num = mysqli_num_rows($result);
        if($num == 1){
            $login = true;
        }
        else{
           

        }
        echo"loggedin";
    }
?>