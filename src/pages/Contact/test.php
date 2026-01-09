<?php
// test.php - Archivo de prueba para el formulario React

// Configuración de headers para CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejo de preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false, 
        'message' => 'Método no permitido'
    ]);
    exit;
}

try {
    // Leer datos JSON del body
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Verificar que se recibieron datos
    if (!$input) {
        throw new Exception('No se recibieron datos JSON válidos');
    }
    
    // Log de los datos recibidos (para debugging)
    error_log('Datos recibidos: ' . print_r($input, true));
    
    // Validar campos requeridos
    $required_fields = ['nombre', 'empresa', 'email', 'asunto', 'mensaje'];
    $missing_fields = [];
    
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            $missing_fields[] = $field;
        }
    }
    
    if (!empty($missing_fields)) {
        throw new Exception('Campos requeridos faltantes: ' . implode(', ', $missing_fields));
    }
    
    // Validar email
    if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Email no válido');
    }
    
    // Sanitizar datos
    $data = [
        'nombre' => htmlspecialchars(trim($input['nombre'])),
        'empresa' => htmlspecialchars(trim($input['empresa'])),
        'email' => filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL),
        'celular' => htmlspecialchars(trim($input['celular'] ?? '')),
        'ubicacion' => htmlspecialchars(trim($input['ubicacion'] ?? '')),
        'asunto' => htmlspecialchars(trim($input['asunto'])),
        'mensaje' => htmlspecialchars(trim($input['mensaje'])),
        'fecha' => date('Y-m-d H:i:s')
    ];
    
    // Guardar en archivo de texto (temporal, para testing)
    $log_entry = "=== NUEVO CONTACTO ===\n";
    $log_entry .= "Fecha: " . $data['fecha'] . "\n";
    $log_entry .= "Nombre: " . $data['nombre'] . "\n";
    $log_entry .= "Empresa: " . $data['empresa'] . "\n";
    $log_entry .= "Email: " . $data['email'] . "\n";
    $log_entry .= "Celular: " . $data['celular'] . "\n";
    $log_entry .= "Ubicación: " . $data['ubicacion'] . "\n";
    $log_entry .= "Asunto: " . $data['asunto'] . "\n";
    $log_entry .= "Mensaje: " . $data['mensaje'] . "\n";
    $log_entry .= "========================\n\n";
    
    // Intentar escribir en archivo (opcional)
    @file_put_contents('contactos.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    // Simular envío de email (puedes activar esto después)
    $email_enviado = true; // Cambia a false si quieres simular error
    
    if ($email_enviado) {
        // Respuesta exitosa
        echo json_encode([
            'success' => true,
            'message' => '¡Mensaje enviado correctamente! Te contactaremos pronto.',
            'data' => [
                'nombre' => $data['nombre'],
                'email' => $data['email'],
                'fecha' => $data['fecha']
            ]
        ]);
    } else {
        throw new Exception('Error al enviar el correo electrónico');
    }
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage(),
        'debug' => [
            'php_version' => PHP_VERSION,
            'request_method' => $_SERVER['REQUEST_METHOD'],
            'content_type' => $_SERVER['CONTENT_TYPE'] ?? 'No definido',
            'raw_input' => file_get_contents('php://input')
        ]
    ]);
}
?>