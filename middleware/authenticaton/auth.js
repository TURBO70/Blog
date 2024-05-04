var jwt=require('jsonwebtoken')


module.exports.auth=(req,res,next)=>{
const token =req.header('token');
jwt.verify(token,"Turbo",async function(err,decoded){
if (err){ 
res.json({message:"error in token or token not provided",err})
}else{
    req.id=decoded.userid;
    next()
}
});
};