<?php
require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/classes/EmailService.php';

error_reporting(E_ALL);
ini_set('display_errors', 0);

// CORS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://nextevolution.com.mx');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    // Recibir datos JSON o POST
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    if (!is_array($data)) $data = $_POST ?? [];

    if (empty($data)) throw new Exception('No se recibieron datos');

    // Campos obligatorios
    $required = ['nombre','empresa','email','asunto','mensaje'];
    $missing = [];
    foreach($required as $f) {
        if (empty(trim($data[$f] ?? ''))) $missing[] = $f;
    }
    if (!empty($missing)) throw new Exception('Faltan campos: ' . implode(', ', $missing));

    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) throw new Exception('Email no válido');

    // Sanitizar datos
    $contactData = [
        'nombre' => htmlspecialchars(trim($data['nombre']), ENT_QUOTES, 'UTF-8'),
        'empresa' => htmlspecialchars(trim($data['empresa']), ENT_QUOTES, 'UTF-8'),
        'email' => strtolower(trim($data['email'])),
        'celular' => htmlspecialchars(trim($data['celular'] ?? ''), ENT_QUOTES, 'UTF-8'),
        'ubicacion' => htmlspecialchars(trim($data['ubicacion'] ?? ''), ENT_QUOTES, 'UTF-8'),
        'asunto' => htmlspecialchars(trim($data['asunto']), ENT_QUOTES, 'UTF-8'),
        'mensaje' => htmlspecialchars(trim($data['mensaje']), ENT_QUOTES, 'UTF-8'),
        'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
    ];

    // Guardar en DB
    $pdo = (new Database())->getConnection();
    $stmt = $pdo->prepare("INSERT INTO contacto
        (nombre, empresa, email, celular, ubicacion, asunto, mensaje, ip_address, user_agent, fecha_creacion)
        VALUES (:nombre,:empresa,:email,:celular,:ubicacion,:asunto,:mensaje,:ip_address,:user_agent,NOW())");
    $stmt->execute($contactData);
    $contactId = $pdo->lastInsertId();

    // Emails
    $emails = new EmailService();
    $adminSent = $emails->sendAdminNotification($contactData);
    $clientSent = $emails->sendClientConfirmation($contactData);

    // Respuesta JSON
    echo json_encode([
        'success' => true,
        'message' => 'Mensaje enviado correctamente',
        'contact_id' => $contactId,
        'email_status' => [
            'admin_notification' => $adminSent,
            'client_confirmation' => $clientSent
        ]
    ], JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error del servidor: ' . $e->getMessage(),
        'error_code' => 'SERVER_ERROR',
        'trace' => $e->getTraceAsString(),
        'timestamp' => date('c')
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
?>