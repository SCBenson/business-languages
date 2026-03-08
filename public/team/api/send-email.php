<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://www.businesslanguages.de/api/send-email.php');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed!']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'OPTIONS'){
    http_response_code(204);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../vendor/autoload.php';

$smtpUser = getenv('SMTP_USERNAME');
$smtpPass = getenv('SMTP_PASSWORD');

if(!$smtpUser || !$smtpPass){
    http_response_code(500);
    echo json_encode(['error' => 'Mail server not configured']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name   = trim($input['name'] ?? '');
$email  = trim($input['name'] ?? '');
$subject  = trim($input['subject'] ?? '');
$message  = trim($input['message'] ?? '');

// Server-side validation
if (!$name || !$email || !$subject || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'cloud2-vm215.de-nserver.de';
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom('info@businesslanguages.de', 'Business Languages');
    $mail->addAddress('info@businesslanguages.de');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "Contact Form: " . $subject;
    $mail->Body    = "
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
        <hr>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";
    $mail->AltBody = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";

    $mail->send();
    echo json_encode(['success' => 'Message sent successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not send message. Please try again later.']);
}