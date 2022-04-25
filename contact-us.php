<?php

	$sender = $_POST['email'];
	$sender_name = $_POST['name'];
	$recipient = 'you@yourdomain.tld';

	$subject = "php mail test";
	$message = $_POST['message'];
	$headers = 'From:' . $sender . $sender_name;

	if (mail($recipient, $subject, $message, $headers))
	{
		echo "Message accepted";
	}
	else
	{
		echo "Error: Message not accepted";
	}
?>