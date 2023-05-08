const express = require('express');
const port = 5000;
const app = express();

const db = require('./config/mongoose');

app.use(express.urlencoded({extended : true}));

app.set('view engine','ejs');
app.set('views','./views');

const contactRouter = require('./routes/home');
app.use('/',contactRouter);

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in connecting to server err:${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});