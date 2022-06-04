const express = require('express');

const app = express();

const CORS = require('cors'); 
const routes = require('./routes/routes')

app.use(express.json())
app.use(CORS()) 

const PORT = process.env.PORT || 4000

app.use('/',routes)

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`The server listen to port ${PORT}`);
})