<?php

    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $subject=$_REQUEST['subject'];
    $message=$_REQUEST['message'];

        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form on Arvan website.";
        if(mail("contact@arvan.in",$subject, $message, $from))
        {
            echo "Sent";
        }
        else
        {
            echo "Error";
        }


?>