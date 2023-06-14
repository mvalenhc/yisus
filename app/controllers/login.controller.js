import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const authentication = async (req, res) => {
    let COD_USUARIO = req.query.COD_USUARIO // 1020402543
    let password = req.query.PASSWORD // 962012d09b8170d912f0669f6d7d9d07
    try {

        let url = `http://localhost:3000/api/user/${COD_USUARIO}`;
        let options = { method: "GET" };
        let datosUsuario = {};

        await fetch(url, options)
        .then((response) => response.json())
        .then(data => datosUsuario = data)

        // res.render('?');
        // const payload = {
        //   correo: email,
        //   contraseña: contraseña
        // }

        // const token = jwt.sign(payload.porcess.env.SECRECT_KEY, { "ExpiresIn": process.env.EXPIRE_TOKEN });

        // res.cookie("cookieGB", token);
        res.send(datosUsuario);
    } catch (error) {
        console.error(error)
    }
}

export const loginController = {
    authentication
}