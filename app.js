const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose')
app.use(express.json());


const{db}=require('./config/afe')

const newsApi=require('./api/news.api');

const userApi=require('./api/user.api');


app.use('/users',userApi);

app.use('/news',newsApi);


db();

// mongoose.connect('mongodb://0.0.0.0:27017/last').then(()=>{
// console.log("Database connected");
// }).catch((err)=>{
//     console.log(err);
// })
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))