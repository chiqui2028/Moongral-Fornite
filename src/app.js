const app = require("./app");
const port = 3000;

app.listen(port, () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


app.js



const express = require("express");

const estudiantesRouter = require("./routers/estudiantes.routers");

const app = express(); 




app.use (express.json())




app.get("/", (req, res) => {
 res.send("API funcionando correctamente")
});

app.use("/estudiantes", estudiantesRouter);

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            error: "JSON inválido. Envía un cuerpo en formato correcto."
        });
    }

    next(err);
});

module.exports = app;


/*

app.get("/estudiantes", (req, res) => {
    res.json([
        { id: 1, nombre: "ana" }, 
        { id: 2, nombre: "carlos" } 
    ]);
});



app.post('/estudiantes',(req, res ) =>{
    
    if(!req.body.nombre){
        return res.status(400).json({
            error: "El nombre es obligatorio"
        });
    } 
    
    if(!req.body.edad){
        return res.status(400).json({
            error: "la edad es obligatoria"
        });
    } 

    if(!req.body.correo){
        return res.status(400).json({
            error: "El correo es obligatorio"
        });
    } 

     res.json({
        mensaje: "correo recibido",
        estudiante: req.body
    });

    res.json({
        mensaje: "estudiante recibido",
        estudiante: req.body
    });
     res.json({
        mensaje: "edad recibida",
        estudiante: req.body
    });

    
});


app.put('/estudiantes/:id', (req,res) =>{

const id = req.params.id;
const nombre = req.body.nombre;


   console.log(req.params);

    res.json({
       mensaje: "estudiante actualizado",
       id: id,
       nombre: nombre
    });
})

app.delete('/estudiantes/:id', (req, res) =>{
    
    const id = req.params.id;

    res.json({
        mensaje: "estudiante eliminado",
        id: id
    });
});

app.get("/buscar", (req, res) => {

    console.log(req.query);

    res.json({
        mensaje: "busqueda realizada",
    });
});



*/