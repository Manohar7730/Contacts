const express = require('express');
const port = 5000;
const app = express();

const db = require('./config/mongoose');

const contactRouter = require('./routes/home');
app.use('/',contactRouter);

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in connecting to server err:${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});