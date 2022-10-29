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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sent Message!</title>
</head>
<body>
    <p>Sent the message</p>
    <p>Message Sent: <?php echo $message; ?></p>
</body>
</html>
