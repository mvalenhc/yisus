import { Router } from 'express'
const book = Router()

// vista para la pagina individual
book.get('/pagina', (req, res) => {
    res.render('pagina.ejs')
});

// vista autentificacion de prestamo
book.get('/auth', (req, res) => {
    res.render('auth.ejs')
});

// vista para la confirmacion de prestamo
book.get('/confirm', (req, res) => {
    res.render('confirm.ejs')
});

// vista para el prestamo
book.get('/prestamo', (req, res) => {
    res.render('prestamo.ejs')
});

export default book;