const mongoose=require('mongoose')


module.exports.db=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Mydatabase2').then(()=>{
console.log('Database connected')})
}