import { Router } from "express";
import { Buffer } from "node:buffer";
import fetch from "node-fetch";
import {fileTypeFromBlob,fileTypeFromBuffer} from "file-type";
const home = Router();

// Vista principal de la pagina
home.get("/", async (req, res) => {
  let url = "http://localhost:3000/api/books/";
  let options = { method: "GET" };
  let datosLibro = {};

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      let convert = data.map(async(element) => {
        // Almacenamos el objeto que contiene el buffer de las portadas en una variable
        let datosImagen = element.IMAGEN;

        // Si datosImagen contiene un objeto dentro, convertimos el objeto a buffer
        let buffer = datosImagen ? Buffer.from(datosImagen) : null;
        // Si buffer no está vacio, se saca el mimetype con la funcion fileTypeFromBuffer();
        let mimeType = buffer ? await fileTypeFromBuffer(buffer): null;
        // console.log(mimeType);

        return {
          COD_LIBRO: element.COD_LIBRO,
          SIPNOPSIS: element.SIPNOPSIS,
          TITULO: element.TITULO,
          FECHA_PUBLICACION: element.FECHA_PUBLICACION,
          NUM_SERIE: element.NUM_SERIE,
          COD_GENERO: element.COD_GENERO,
          COD_AUTOR: element.COD_AUTOR,
          IMAGEN: buffer ? {"base64": buffer.toString("base64"),"mimetype": mimeType} : null
        };
      });

      console.log(convert);
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


