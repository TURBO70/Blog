const mongoose =require('mongoose')

const newsSchema =new mongoose.Schema({
title:String,
desc:String,
createdby:{
    type:String,
    ref:'user',
}
},
{
    timestamps:true,
})

module.exports=mongoose.model=('news',newsSchema);