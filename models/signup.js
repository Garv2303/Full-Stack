const mongoose=require('mongoose');
const express=require('express');
const app=express();
const PORT=process.env.PORT || 3030;
const userSchema=mongoose.Schema({
    FName:{type:String, required:[true,'User must enter data']},
    LName:{type:String, required:[false,'User must enter data']},
    Email:{type:String, required:[true,'User must enter email'],unique:[true,'This email is already acquired']},
    Password:{type:String, required:[true,'Please Enter Password']}
    });
const UserSignup=new mongoose.model('signup',userSchema);
module.exports=UserSignup;
