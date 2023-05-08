const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Contacts_project');

const db = mongoose.connection;

db.on('open',()=>{
    console.log('mongoDB is connected')
});

module.exports = db;