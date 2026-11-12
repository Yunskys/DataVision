const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>DataVision Analytics - JECC</h1>
        <h2>Plataforma de Análisis de Datos</h2>
        <p>Bienvenido a DataVision Analytics.</p>
        <p>Solución web para la gestión y análisis de información.</p>
        <p>Desarrollado con Node.js y Express.</p>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
