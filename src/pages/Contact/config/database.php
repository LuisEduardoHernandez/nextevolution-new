<?php
/**
 * config/database.php
 * Configuración de conexión a la base de datos MySQL
 * Ruta: /contact/config/database.php
 */

class Database {
    // Configuración de conexión - ACTUALIZA ESTOS VALORES
    private $host = 'localhost';           // Servidor MySQL
    private $db_name = 'contact_form_db';  // Nombre de la base de datos
    private $username = 'root';            // Usuario MySQL
    private $password = '';                // Contraseña MySQL
    private $charset = 'utf8mb4';          // Charset para emojis y caracteres especiales
    private $port = 3306;                  // Puerto MySQL
    
    // Instancia PDO (patrón Singleton)
    private $pdo = null;
    
    /**
     * Obtener conexión a la base de datos
     * @return PDO Conexión PDO
     * @throws Exception Si hay error de conexión
     */
    public function getConnection() {
        if ($this->pdo === null) {
            try {
                // Construir DSN (Data Source Name)
                $dsn = "mysql:host={$this->host};port={$this->port};dbname={$this->db_name};charset={$this->charset}";
                
                // Opciones de configuración PDO
                $options = [
                    // Modo de errores con excepciones
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    
                    // Fetch mode por defecto
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    
                    // Desactivar emulación de prepared statements
                    PDO::ATTR_EMULATE_PREPARES => false,
                    
                    // Timeout de conexión
                    PDO::ATTR_TIMEOUT => 30,
                    
                    // Conexión persistente (opcional)
                    PDO::ATTR_PERSISTENT => false
                ];
                
                // Crear conexión PDO
                $this->pdo = new PDO($dsn, $this->username, $this->password, $options);
                
                // Configurar timezone de MySQL
                $this->pdo->exec("SET time_zone = '" . date('P') . "'");
                
                // Log de conexión exitosa (solo en desarrollo)
                if ($this->isDevelopmentMode()) {
                    error_log("✅ Conexión MySQL exitosa - DB: {$this->db_name}");
                }
                
            } catch (PDOException $e) {
                // Log del error específico
                error_log("❌ Error conexión MySQL: " . $e->getMessage());
                
                // Excepción genérica para no exponer detalles
                throw new Exception('Error de conexión a la base de datos. Contacta al administrador.');
            }
        }
        
        return $this->pdo;
    }
    
    /**
     * Cerrar conexión explícitamente
     */
    public function closeConnection() {
        $this->pdo = null;
    }
    
    /**
     * Verificar si la conexión está activa
     * @return bool
     */
    public function isConnected() {
        try {
            if ($this->pdo === null) {
                return false;
            }
            $this->pdo->query('SELECT 1');
            return true;
        } catch (PDOException $e) {
            return false;
        }
    }
    
    /**
     * Obtener información de la conexión
     * @return array
     */
    public function getConnectionInfo() {
        try {
            $pdo = $this->getConnection();
            return [
                'host' => $this->host,
                'database' => $this->db_name,
                'charset' => $this->charset,
                'port' => $this->port,
                'server_version' => $pdo->getAttribute(PDO::ATTR_SERVER_VERSION),
                'client_version' => $pdo->getAttribute(PDO::ATTR_CLIENT_VERSION),
                'is_connected' => $this->isConnected(),
                'timestamp' => date('c')
            ];
        } catch (Exception $e) {
            return [
                'error' => 'No se pudo obtener información de conexión',
                'is_connected' => false,
                'timestamp' => date('c')
            ];
        }
    }
    
    /**
     * Ejecutar query simple (solo para consultas básicas)
     * @param string $query
     * @return PDOStatement
     */
    public function query($query) {
        return $this->getConnection()->query($query);
    }
    
    /**
     * Preparar statement
     * @param string $query
     * @return PDOStatement
     */
    public function prepare($query) {
        return $this->getConnection()->prepare($query);
    }
    
    /**
     * Obtener último ID insertado
     * @return string
     */
    public function lastInsertId() {
        return $this->getConnection()->lastInsertId();
    }
    
    /**
     * Iniciar transacción
     */
    public function beginTransaction() {
        return $this->getConnection()->beginTransaction();
    }
    
    /**
     * Confirmar transacción
     */
    public function commit() {
        return $this->getConnection()->commit();
    }
    
    /**
     * Revertir transacción
     */
    public function rollback() {
        return $this->getConnection()->rollback();
    }
    
    /**
     * Verificar si estamos en modo desarrollo
     * @return bool
     */
    private function isDevelopmentMode() {
        return (
            in_array($_SERVER['SERVER_NAME'] ?? '', ['localhost', '127.0.0.1']) ||
            strpos($_SERVER['SERVER_NAME'] ?? '', '.local') !== false ||
            isset($_ENV['APP_ENV']) && $_ENV['APP_ENV'] === 'development'
        );
    }
}

/**
 * Función helper para obtener conexión rápidamente
 * @return PDO
 */
function getDBConnection() {
    static $database = null;
    if ($database === null) {
        $database = new Database();
    }
    return $database->getConnection();
}

/**
 * Función helper para ejecutar queries preparadas
 * @param string $query
 * @param array $params
 * @return PDOStatement
 */
function executeQuery($query, $params = []) {
    $database = new Database();
    $stmt = $database->prepare($query);
    $stmt->execute($params);
    return $stmt;
}
?>