const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index.ejs');
})

router.get('/login',(req,res)=>{
    res.render('login.ejs')
})

router.use((req,res)=>{
    res.send(`<h1> Page not found </h1>`);
})

const { json } = require('express');

module.exports = router;