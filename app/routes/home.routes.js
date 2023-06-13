import { Router } from "express";
import { Buffer } from "node:buffer";
import fetch from "node-fetch";
const home = Router();

// Vista principal de la pagina
home.get("/", async (req, res) => {
  let url = "http://localhost:3000/api/books/";
  let options = { method: "GET" };
  let datosLibro = {};

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      let convert = data.map((element) => {
        // Almacenamos el objeto que contiene el buffer de las portadas en una variable
        let datosImagen = element.IMAGEN;

        // Si datosImagen contiene datos dentro, convertimos el objeto a buffer y luego a base64
        let buffer = datosImagen ? Buffer.from(datosImagen).toString("base64") : null;

        return {
          COD_LIBRO: element.COD_LIBRO,
          SIPNOPSIS: element.SIPNOPSIS,
          TITULO: element.TITULO,
          FECHA_PUBLICACION: element.FECHA_PUBLICACION,
          NUM_SERIE: element.NUM_SERIE,
          COD_GENERO: element.COD_GENERO,
          COD_AUTOR: element.COD_AUTOR,
          IMAGEN: buffer,
        };
      });

      datosLibro = convert;
    })
    .catch((err) => console.error("Error en peticion" + err));

  res.render("index", { libros: datosLibro });
});

// vista para la pagina por genero
home.get("/genero", (req, res) => {
  res.render("pagina-genero.ejs");

});


export default home;


