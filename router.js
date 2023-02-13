const express = require('express');
const router = express.Router();

//Invocamos a la conexion de la DB
// const conexion = require('./database/db');

router.get('/', (req,res)=>{
    res.render('index.ejs');
})

router.get('/IngressCloud', (req,res)=>{
    res.render('IngressCloud');
})

router.get('/preguntasFrecuentes', (req,res)=>{
    res.render('preguntasFrecuentes');
})

//RUTA QUE NOS LLEVA AL FORMULARIO PARA DAR DE ALTA UN NUEVO REGISTRO
router.get('/Login/Login', (req, res)=>{           
    conexion.query('SELECT * FROM persona',(error, results)=>{
        if(error){
            throw error;
        } else {                                                                
            res.render('Login/Login', {data:results});                                             
        }   
    })
})
//Registrar Entrada y Salida Aprendiz
router.get('/LoginAprendiz/LoginAprendiz', (req, res)=>{           
    conexion.query('SELECT * FROM persona ',(error, results)=>{
        if(error){
            throw error;
        } else {                                                                
            res.render('LoginAprendiz/LoginAprendiz', {data:results});                                               
        }   
    })
})
router.get('/LoginInvitado/LoginInvitado', (req, res)=>{           
    conexion.query('SELECT * FROM invitado', (error, results)=>{
        if(error){
            throw error;
        } else {                                                                
            res.render('LoginInvitado/LoginInvitado', {data:results});                                               
        }   
    })
})

router.get('/LoginInvitado/entradainv', (req, res)=>{           
    conexion.query('SELECT * FROM invitado WHERE idinvitado=?','SELECT * FROM invitado WHERE idinvitado=?', (error, results)=>{
        if(error){
            throw error;
        } else {                                                                
            res.render('LoginInvitado/entradainv', {data:results});                                               
        }   
    })
})

//RUTA PARA MOSTRAR TODOS LOS REGISTROS
router.get('/historial', (req, res)=>{           
     conexion.query('SELECT * FROM persona',(error, results)=>{
        if(error){
            throw error;
        } else {                                                                
            res.render('historial', {data:results});                                               
        }   
    })
})

//ruta para enviar los datos en formato json
//Aprendiz
router.get('/data', (req, res)=>{     
    conexion.query('SELECT * FROM persona',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(data);          
        }   
    })
})
//Invitado
router.get('/data', (req, res)=>{     
    conexion.query('SELECT * FROM invitado',(error, results)=>{
        if(error){
            throw error;
        } else {                                                   
            data = JSON.stringify(results);
            res.send(data);          
        }   
    })
})

//RUTA PARA EDITAR UN REGISTRO SELECCIONADO
//Aprendiz
router.get('/modificar/:idpersona', (req,res)=>{    
    const idpersona = req.params.idpersona;
    conexion.query('SELECT * FROM persona WHERE idpersona=?',[idpersona] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('modificar.ejs', {nombre:results[0]});            
        }        
    });
});

//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO
router.get('/delete/:idpersona', (req, res) => {
    const idpersona = req.params.idpersona;
    conexion.query('DELETE FROM persona WHERE idpersona = ?',[idpersona], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/historial');         
        }
    })
});

//RUTA para contacto
router.get('/contacto', (req,res)=>{
    res.render('contacto');
})

//Invocamos los metodos para el CRUD
// const crud = require('./controllers/crud');
const { json } = require('express');

// usamos router.post porque en el formulario el method="POST"
// router.post('/save', crud.save);    //invitado
// router.post('/save1', crud.save1);  //persona
// router.post('/save2', crud.save2);  //entradapersona
// router.post('/save3', crud.save3);  //salidapersona
// router.post('/save4', crud.save4);  //entradainvitado
// router.post('/save5', crud.save5);  //salidainvitado
// router.post('/update', crud.update);  //persona
// router.post('/update1', crud.update1); //invitado
// router.post('/update2', crud.update2);
// router.post('/save10', crud.save10); //admin


module.exports = router;