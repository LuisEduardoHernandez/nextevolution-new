<?php
/**
 * Cargador de variables de entorno
 * Carga las variables del archivo .env de forma segura
 */

class EnvLoader {
    private static $loaded = false;
    
    public static function load($path = '.env') {
        if (self::$loaded) {
            return;
        }
        
        if (!file_exists($path)) {
            throw new Exception("Archivo .env no encontrado en: " . $path);
        }
        
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        
        foreach ($lines as $line) {
            // Ignorar comentarios
            if (strpos(trim($line), '#') === 0) {
                continue;
            }
            
            // Parsear línea
            if (strpos($line, '=') !== false) {
                list($key, $value) = explode('=', $line, 2);
                $key = trim($key);
                $value = trim($value);
                
                // Remover comillas si existen
                if (preg_match('/^"(.*)"$/', $value, $matches)) {
                    $value = $matches[1];
                } elseif (preg_match("/^'(.*)'$/", $value, $matches)) {
                    $value = $matches[1];
                }
                
                // Solo establecer si no existe ya en $_ENV
                if (!array_key_exists($key, $_ENV)) {
                    $_ENV[$key] = $value;
                    putenv("$key=$value");
                }
            }
        }
        
        self::$loaded = true;
    }
    
    /**
     * Obtener variable de entorno con valor por defecto
     */
    public static function get($key, $default = null) {
        return $_ENV[$key] ?? getenv($key) ?: $default;
    }
    
    /**
     * Obtener variable requerida (lanza excepción si no existe)
     */
    public static function getRequired($key) {
        $value = self::get($key);
        if ($value === null || $value === '') {
            throw new Exception("Variable de entorno requerida no encontrada: $key");
        }
        return $value;
    }
    
    /**
     * Verificar si estamos en modo debug
     */
    public static function isDebug() {
        return strtolower(self::get('DEBUG', 'false')) === 'true';
    }
    
    /**
     * Obtener configuración de base de datos
     */
    public static function getDatabaseConfig() {
        return [
            'host' => self::getRequired('DB_HOST'),
            'username' => self::getRequired('DB_USERNAME'),
            'password' => self::getRequired('DB_PASSWORD'),
            'database' => self::getRequired('DB_NAME')
        ];
    }
    
    /**
     * Obtener configuración de SMTP
     */
    public static function getSmtpConfig() {
        return [
            'host' => self::getRequired('SMTP_HOST'),
            'username' => self::getRequired('SMTP_USERNAME'),
            'password' => self::getRequired('SMTP_PASSWORD'),
            'port' => (int)self::get('SMTP_PORT', 587),
            'from_email' => self::getRequired('FROM_EMAIL'),
            'from_name' => self::get('FROM_NAME', 'Sistema de Contacto')
        ];
    }
}