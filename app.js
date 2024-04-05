const express = require('express');
const app = express();
const mongoose  =require('./db/conn');
const path = require('path')
const staticpath = path.join(__dirname + '/public/');
PORT = process.env.PORT || 3030
app.use(express.static(staticpath));
const SignupModel = require('./models/signup');

app.set('view engine','hbs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    console.log(staticpath);
    //res.status(200).send(`<h1>Server is running</h1>`);
    res.render('index');
});
app.get('/signup',(req,res)=>{
    console.log(staticpath);
    //res.status(200).send(`<h1>Server is running</h1>`);
    res.render('signup');
});
app.get('/login',(req,res)=>{
    console.log(staticpath);
    //res.status(200).send(`<h1>Server is running</h1>`);
    res.render('login');
});
app.post('/signup',async (req,res)=>{
    // console.log('button click communicated');
    console.log(req.body);
    const signupView = new SignupModel({
        FName:req.body.fname,
        LName:req.body.lname,
        Email:req.body.email,
        Password:req.body.password
    });
    const result = await signupView.save();
    console.log(result);
    res.redirect('/');
}),

app.get('/login',(req,res)=>{
    res.render('login');
});

app.post('/login',async (req,res)=>{
    const Mail=req.body.email;
    const Password=req.body.password;
    const loginview=await SignupModel.findOne({Email:Mail});
    console.log(loginview);
   console.log(req.body);
    if(loginview){
        if(loginview.Password==Password){
            res.render('dashboard');
        }
        else{
            res.render('login',{message:'Login Failed! Please Check Email and password'});
        }
    }else{
        res.render('login',{message:'Login Failed! Please Check Email and password'});
    }
});

app.listen(PORT,(req,res)=>{
    console.log(`serve is running on port ${PORT}`);
});

