const express  = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const Register = require("./models/register");
const port = process.env.PORT || 3000;
require("./db/conn");
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../Templates/views");
const partials_path = path.join(__dirname,"../Templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);
app.get('/',(req,res)=>{
    res.render("register");
})

app.post('/welcome',async (req,res)=>{
    try{
       const register = new Register({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
       })

       const data = await register.save();
       res.status(201).render("welcome");
    }
    catch(error){
        res.status(400).send(error);
    }
})

app.listen(port,()=>console.log(`Running at port number ${port}`));