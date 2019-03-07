const express=require("express");
const bodyParser=require('body-parser');
const dbConnect= require("./dbConnect");
const Visitor = require("./models/visitor");
const path=require('path');

const app=express();
const port=process.env.PORT||1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"/Views")));


app.get("/", function(req,res,next){
    res.sendFile(__dirname+"/Views/build/index.html");
})
app.post("/",function(req,res,next){
    var user = new Visitor();
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.email = req.body.email;
    user.subject = req.body.subject;
    user.message = req.body.message;
    
    user.save(function(err){
        if(err){
            throw err;
        }
        else{
            res.send("Thank you");
        }
    });

})

app.listen(port,()=>console.log(`server running on ${port}`));