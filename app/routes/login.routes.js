
import { Router } from 'express'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
const login = Router()

// Vista de inicio de sesion
login.get('/login', async (req, res) => {
  let COD_USUARIO = req.query.COD_USUARIO
  let password = req.query.password
  try {

    let url = `http://localhost:3000/api/books/${COD_USUARIO}`;
    let options = { method: "GET" };
    let datosUsuario = {};

    await fetch(url, options)
      .then((response) => response.json())
      .then(data => console.log(data))
    
    res.render('login');
  } catch (error) {
    console.error(error)
  }



  console.log(COD_USUARIO,password)

  // const email = req.user.emails[0].value;
  // const contraseña = req.user.contraseña[0].value;

  // const datos = {




  // }

  // const payload = {
  //   correo: email,
  //   contraseña: contraseña

  // }


  // const token = jwt.sign(payload.porcess.env.SECRECT_KEY, { "ExpiresIn": process.env.EXPIRE_TOKEN });

  // res.cookie("cookieGB", token);

});

login.get('/loginregis', async (req, res) => {



  try {
    const token = jwt.verify(req.cookies.ckjs, process.env.SECRET_KEY);

    let url = "http://localhost:3000/api/user";
    let option = {
      method: "GET"
    }
    let datos = {

    };

    await fetch(url, option)
      .then(response => response.json())
      .then(data => {
        datos = data[0];
      })
      .catch(err => console.log("error en peticion: " + err));

  } catch (error) {
    res.redirect("/")
  }

});

export default login;
