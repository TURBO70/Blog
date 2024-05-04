const joi =require('joi');


let methods=["body","params"];

let schema={
body:joi.object({
name:joi.string().required().min(5).max(20),
email:joi.string().email().required(),
password:joi.string().required().pattern(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),
repassword:joi.ref("password"),
age:joi.number().required().min(16).max(50)

}),
params:joi.object({
id:joi.string().required().min(3).max(3),
}),
};
module.exports.userValidation=(req,res,next)=>{
let errorArray=[];
methods.map((key)=>{
let {error}=schema[key].validate(req[key],{abortEarly:false});
if (error){
error.details.map((msg)=>{
    errorArray.push(msg.message);
});
}

});
if (errorArray.length>0){
res.json(errorArray)
}else{
    next();
}
};
