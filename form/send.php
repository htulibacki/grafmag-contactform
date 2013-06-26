<?php

require_once 'class.phpmailer.php';

$_POST = array_map('trim', $_POST);

$error = false;

if (!isset($_POST['contact_name']) || empty($_POST['contact_name'])) {
    $error = true;
}

if (!isset($_POST['contact_email']) || empty($_POST['contact_email']) || !PHPMailer::ValidateAddress($_POST['contact_email'])) {
    $error = true;
}

if (!isset($_POST['contact_body']) || empty($_POST['contact_body'])) {
    $error = true;
}

if (!isset($_POST['contact_check']) || empty($_POST['contact_check']) || (int) $_POST['contact_check'] !== ((int) $_POST['contact_check_data'][0] * (int) $_POST['contact_check_data'][1])) {
    $error = true;
}

if ($error) {
    exit('nok');
}

exit('ok');