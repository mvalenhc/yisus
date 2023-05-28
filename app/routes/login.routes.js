import { Router } from 'express'
const login = Router()

// Vista de inicio de sesion
login.get('/login', (req, res) => {
  res.render('login');
});

export default login;