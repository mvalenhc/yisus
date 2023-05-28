import { Router } from 'express';
const admin = Router();

//vista para el formulario para agregar libros
admin.get('/agregar', (req, res) => {
    res.render('agregar-libros.ejs')
});

//vista para el formulario la devolucion de libros
admin.get('/devolucion', (req, res) => {
    res.render('devolucion.ejs')
});

export default admin;