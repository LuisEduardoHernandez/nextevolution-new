#!/bin/bash

echo "🚀 Iniciando servidor PHP..."
echo "📦 URL: http://localhost:8080"
echo "📁 Directorio: $(pwd)"
echo ""
echo "Para probar: http://localhost:8080/contact.php"
echo "Presiona Ctrl+C para detener"
echo ""

# Cambiar al directorio correcto
cd "$(dirname "$0")"

# Iniciar servidor PHP
php -S localhost:8080