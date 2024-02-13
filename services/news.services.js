const newModel=require('../models/news.model');


module.exports.addNew=async(req,res)=>{
    const{title,desc,createdby}=req.body;
    await newModel.insertMant({title,desc,createdby});
    res.json({"message":success})
}



module.exports.allNews=async(req,res)=>{
    let news =await newModel.Find({}).populate('createdby','name')
    res.json({"message":success,news})
}


module.exports.userNews=async(req,res)=>{
   const createdby =req.header('id')
   let news =await newModel.Find({createdby})
    res.json({"message":success,news})
}

module.exports.updateUser=async(req,res)=>{
   const{title,desc,_id}=req.body
   await newModel.findByIdAndUpdate({_id},{title,desc});
   res.json({"message":success})
}

 module.exports.deleteUser=async(req,res)=>{
    const{_id}=req.body
   await newModel.deleteOne({_id});
   res.json({"message":success})
}
