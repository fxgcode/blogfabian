// Proyecto: Blog 
// Desarrollador: Fabian Guerrero
// Fecha: 2025
console.log("Desarrollado por Fabian Guerrero");

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});