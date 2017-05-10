<?php
$subject = 'New Online Inquiry for Studio44'; // Subject of your email
$to = 'velachery@s44.in';  //Recipient's E-mail
$emailTo = $_REQUEST['email'];

$headers .= 'From: ' . $emailTo . "\r\n";
$headers .= 'Cc: praveenrulz@gmail.com,thiagarajan.rengarajan@gmail.com' . "\r\n";

$message .= 'Name : ' . $_REQUEST['name'] . "\n";
$message .= 'Email : ' . $_REQUEST['email'] . "\n";
$message .= 'Phone : ' . $_REQUEST['phone'] . "\n";
$message .= 'Message : ' . $_REQUEST['message'];

if (@mail($to, $subject, $message, $headers))
{
    // Transfer the value 'sent' to ajax function for showing success message.
	echo 'sent';
}
else
{
	// Transfer the value 'failed' to ajax function for showing error message.
	echo 'failed';
}
?>