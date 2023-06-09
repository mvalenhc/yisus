import { Router } from 'express'
const home = Router()

// Vista principal de la pagina
home.get('/', (req, res) => {
  res.render('index');
});

// Vista principal de la pagina
home.get('/prueba', async (req, res) => {
  let url = "http://localhost:3000/api/books/";
  let options = { method: 'GET' };
  let datosLibro = {};

  let result = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      datosLibro = data;
    })
    .catch(err => console.error("Error en peticion" + err))

  // console.log(datosLibro);

  res.render('prueba', {libros: datosLibro});
});

// vista para la pagina por genero
home.get('/genero', (req, res) => {
  res.render('pagina-genero.ejs')
});

export default home;