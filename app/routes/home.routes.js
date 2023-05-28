import { Router } from 'express'
const home = Router()

// Vista principal de la pagina
home.get('/', (req, res) => {
  res.render('index');
});

// vista para la pagina por genero
home.get('/genero', (req, res) => {
  res.render('pagina-genero.ejs')
});

export default home;