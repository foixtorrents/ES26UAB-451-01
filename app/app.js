const express = require('express');
const app = express();
const platRoutes = require('./routes/platRoutes');

app.set('view engine', 'ejs');
app.use('/', platRoutes);

app.listen(3000, () => {
    console.log('🚀 Servidor funcionant! Obre el navegador a: http://localhost:3000/plats');
});