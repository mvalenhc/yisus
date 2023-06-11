import { Router } from "express";
const book = Router();

// vista para la pagina individual
book.get("/pagina", async (req, res) => {
  let COD_LIBRO = req.query.COD_LIBRO;

  let url = `http://localhost:3000/api/books/${COD_LIBRO}`;
  let options = { method: "GET" };
  let infoLibro = {}
  let result = await fetch(url, options)
    .then((respuesta) => respuesta.json())
    .then((data) => infoLibro = data[0])
    .catch((err) => { console.log(err) })

  console.log(COD_LIBRO);
  console.log(infoLibro);

res.render("pagina.ejs",{infoLibro: infoLibro});
});

// vista autentificacion de prestamo
book.get("/auth", (req, res) => {
  res.render("auth.ejs");
});

// vista para la confirmacion de prestamo
book.get("/confirm", (req, res) => {
  res.render("confirm.ejs");
});

// vista para el prestamo
book.get("/prestamo", (req, res) => {
  res.render("prestamo.ejs");
});

export default book;
