const mongoose = require("mongoose");

module.exports= mongoose.connect('mongodb://nhari159:n.hari159@ds161335.mlab.com:61335/newvisitors',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})