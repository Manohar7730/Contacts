const express = require('express');
const port = 5000;
const app = express();

app.get('/',(req,res)=>{
    res.end('Home');
});

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in connecting to server err:${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});