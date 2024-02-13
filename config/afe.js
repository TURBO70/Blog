const mongoose=require('mongoose')


module.exports.db=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/firstdb').then(()=>{
console.log('Database connected')})
}