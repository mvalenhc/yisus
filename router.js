const express = require('express');
const router = express.Router();

// vista principal de la pagina
router.get('/', (req, res) => {
    res.render('index.ejs');
});

// vista del login o inicio de sesion
router.get('/login', (req, res) => {
    res.render('login.ejs')
});

// vista autentificacion de prestamo
router.get('/auth', (req, res) => {
    res.render('auth.ejs')
});

// vista para la pagina individual
router.get('/pagina', (req, res) => {
    res.render('pagina.ejs')
});

// vista para la confirmacion de prestamo
router.get('/confirm', (req, res) => {
    res.render('confirm.ejs')
});

// Ruta por defecto al ingresar una ruta desconocida
router.use((req, res) => {
    res.send(`<h1> Page not found </h1>`);
});

const { json } = require('express');

module.exports = router;