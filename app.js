const express = require('express')
const app = express()
const port = 3001
const mongoose=require('mongoose')
app.use(express.json());


const{db}=require('./config/dbconeection')

const newsApi=require('./api/news.api');

const userApi=require('./api/user.api');


app.use('/users',userApi);

app.use('/news',newsApi);


db();


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))