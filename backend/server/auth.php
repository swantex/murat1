<?php

if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];

    $mailTo = "nigamanth.srivatsan@gmail.com";
    $headers = "From: " . $email;
    $txt = "You have received an email from " . $email . ".\n" . $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: auth.php?mailsend");
}

?>