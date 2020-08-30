const express = require('express');
const proxy = require('http-proxy-middleware')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt');

const config = require('./config/key')

const { User } = require('./models/user');
const { auth } = require('./middleware/auth')
mongoose.connect(
  config.mongoURI,
  { useNewUrlParser:true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/api/users/auth',auth,(req,res)=>{
    //로그인된 유저만 파일(?)을 업로드할 수 있게 하는 middleware?
    res.status(200).json({
        _id: req._id,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role
    })
})


app.get('/',(req,res)=>{
    res.json({"hello":"hello!!"})
})

app.post('/api/users/register',(req,res)=>{
    const user = new User(req.body);

    user.save((err, doc) => {
        if(err) return res.json({success:false, err});
        res.status(200).json({ 
            success: true, 
            userData: doc 
        })
    })   
})

app.post('/api/users/login',(req,res) => {

    User.findOne({email: req.body.email},(err,user) => {
        if(!user) 
            return res.json({
                loginSuccess: false,message:"email not found"
            })    
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch){
                return res.json({loginSuccess:false, message:"wrong password"})
            }
        });
        user.generateToken((err,user)=>{
            if(err) return res.status(400).send(err);
            res.cookie("x_auth",user.token)
                .status(200)
                .json({
                loginSuccess:true
                })
        })
    });

})

app.get('/api/users/logout',auth,(req,res)=>{
    User.findOneAndUpdate({_id:req.user.id}, {token: ""},(err,doc)=>{
        if(err) return res.json({success: false, err})
        return res.status(200).send({
            success:true
        })
    })
})


const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`Server Running at ${port}`)
});