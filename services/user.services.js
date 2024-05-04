const jwt = require('jsonwebtoken');
const userModel=require('../models/user.model');

const bcrypt=require('bcrypt');
module.exports.signup=async(req,res)=>{
const {name,email,password,age}=req.body;
const user=await userModel.findOne({email})
if (user){
    res.json({message:"email already exists"});
}else{
bcrypt.hash(password,4,async function (err,hash){
    await userModel.insertMany({name,email,password:hash,age})
    res.json({message:"success"})
})
}};

module.exports.signin=async(req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email})
    if (user){
        const match =await bcrypt.compare(password,user.password)
  
        if (match){
            let token=jwt.sign({role:'user',userid:user._id,name:user.name},"Turbo") 
            res.json({message:"success",token})
        }else{
            res.json({message:"password inncorresct"})
        }
    }else{
        res.json({message:"email dosnt exist"})
    }
};