const express = require("express");
const app = express();

// Static Files
app.use("/assets", express.static(__dirname + "/public"));

//4- Estableciendo el motor de plantillas
app.set("view engine", "ejs");

//Establecemos las rutas para las VISTAS usando un archivo aparte (router.js) y la clase Router()
app.use("/", require("./router"));

app.listen(4000, () => {
  console.log("server: http://localhost:5000");
});
