<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';
require_once __DIR__ . '/PHPMailer/src/Exception.php';

class EmailService {
    private $adminEmail = 'cuentas@nextevolution.com.mx';
    private $noReplyEmail = 'no-reply@nextevolution.com.mx';
    private $noReplyPassword = 'NextEvolution2025#';
    private $companyName = 'NEXT EVOLUTION';

    private $smtpConfig = [
        'host' => 'smtp.hostinger.com',
        'port' => 587,
        'encryption' => 'tls'
    ];

    public function sendAdminNotification($data) {
        try {
            $subject = "🔔 Nuevo contacto desde el sitio: " . $data['asunto'];
            $message = $this->getAdminEmailTemplate($data);

            return $this->sendEmailSMTP(
                $this->adminEmail, // destinatario
                $subject,
                $message,
                $this->noReplyEmail, // reply-to
                $this->companyName
            );
        } catch (Exception $e) {
            error_log("Error en sendAdminNotification: " . $e->getMessage());
            return false;
        }
    }

    public function sendClientConfirmation($data) {
        try {
            $subject = "✅ Confirmación: Mensaje recibido - " . $this->companyName;
            $message = $this->getClientEmailTemplate($data);

            return $this->sendEmailSMTP(
                $data['email'], // destinatario cliente
                $subject,
                $message,
                $this->noReplyEmail, // reply-to
                $this->companyName
            );
        } catch (Exception $e) {
            error_log("Error en sendClientConfirmation: " . $e->getMessage());
            return false;
        }
    }

    private function sendEmailSMTP($to, $subject, $message, $replyTo = null, $replyToName = null) {
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = $this->smtpConfig['host'];
            $mail->SMTPAuth   = true;
            $mail->Username   = $this->noReplyEmail;
            $mail->Password   = $this->noReplyPassword;
            $mail->SMTPSecure = $this->smtpConfig['encryption'];
            $mail->Port       = $this->smtpConfig['port'];

            $mail->setFrom($this->noReplyEmail, $this->companyName);
            $mail->addAddress($to);

            if ($replyTo) {
                $mail->addReplyTo($replyTo, $replyToName);
            }

            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';
            $mail->Subject = $subject;
            $mail->Body    = $message;

            $mail->send();
            error_log("✅ Email enviado correctamente a: $to");
            return true;

        } catch (Exception $e) {
            error_log("❌ PHPMailer error ({$to}): " . $mail->ErrorInfo);
            return false;
        }
    }

    // Templates quedan igual
    private function getAdminEmailTemplate($data) {
        $fecha = date('d/m/Y H:i:s');
        return "<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <title>Nuevo Mensaje de Contacto</title>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; }
        .header { background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: normal; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #0078d4; }
        .label { font-weight: bold; color: #323130; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        .value { font-size: 16px; color: #201f1e; margin-top: 5px; }
        .message-box { background: #deecf9; padding: 20px; border-radius: 8px; border-left: 4px solid #0078d4; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; background: #f3f2f1; color: #605e5c; font-size: 12px; }
        .timestamp { color: #605e5c; font-size: 14px; text-align: center; margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>📧 Nuevo Mensaje de Contacto</h1>
        </div>
        <div class='content'>
            <div class='timestamp'>📅 Recibido: $fecha</div>
            
            <div class='field'>
                <div class='label'>👤 Nombre</div>
                <div class='value'>{$data['nombre']}</div>
            </div>
            
            <div class='field'>
                <div class='label'>🏢 Empresa</div>
                <div class='value'>{$data['empresa']}</div>
            </div>
            
            <div class='field'>
                <div class='label'>📧 Email</div>
                <div class='value'><a href='mailto:{$data['email']}' style='color: #0078d4;'>{$data['email']}</a></div>
            </div>
            
            <div class='field'>
                <div class='label'>📱 Celular</div>
                <div class='value'>" . ($data['celular'] ?: 'No proporcionado') . "</div>
            </div>
            
            <div class='field'>
                <div class='label'>📍 Ubicación</div>
                <div class='value'>" . ($data['ubicacion'] ?: 'No proporcionada') . "</div>
            </div>
            
            <div class='field'>
                <div class='label'>📋 Asunto</div>
                <div class='value'>{$data['asunto']}</div>
            </div>
            
            <div class='message-box'>
                <div class='label'>💬 Mensaje</div>
                <div class='value'>" . nl2br(htmlspecialchars($data['mensaje'])) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>Email automático del formulario de contacto web</p>
            <p>Para responder, contesta directamente a este mensaje</p>
        </div>
    </div>
</body>
</html>";
    }

    private function getClientEmailTemplate($data) {
        $fecha = date('d/m/Y H:i:s');
        return "<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <title>Confirmación de mensaje</title>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; }
        .header { background: linear-gradient(135deg, #16a085 0%, #27ae60 100%); color: white; padding: 40px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: normal; }
        .content { padding: 30px; }
        .message-box { background: #eafaf1; padding: 20px; border-radius: 8px; border-left: 4px solid #27ae60; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; background: #f3f2f1; color: #605e5c; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>✅ ¡Hemos recibido tu mensaje!</h1>
        </div>
        <div class='content'>
            <p>Hola <strong>{$data['nombre']}</strong>,</p>
            <p>Gracias por ponerte en contacto con <strong>{$this->companyName}</strong>. Hemos recibido tu mensaje y nuestro equipo te responderá lo antes posible.</p>
            
            <div class='message-box'>
                <p><strong>Tu mensaje:</strong></p>
                <p>" . nl2br(htmlspecialchars($data['mensaje'])) . "</p>
            </div>

            <p>Si tienes información adicional o necesitas modificar tu mensaje, puedes responder directamente a este correo.</p>
            <p>📅 Fecha de envío: $fecha </p>
        </div>
        <div class='footer'>
            <p>Este es un mensaje automático, por favor no lo respondas a menos que sea necesario.</p>
            <p>{$this->companyName}</p>
        </div>
    </div>
</body>
</html>";
    }
}
?>