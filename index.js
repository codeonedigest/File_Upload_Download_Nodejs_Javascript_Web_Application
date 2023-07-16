const express = require("express")
const path = require("path")
const multer = require("multer")
const controller = require("./filecontroller")
const app = express()
    
// View Engine Setup
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
    
global.__basedir = __dirname;
 
  
app.get("/",function(req,res){
    res.render("Signup");
})
    
app.post("/uploadProfilePicture",function (req, res, next) {   
    console.log("Uploading file to server...");
    controller.upload(req,res);
})
    
app.get("/files",function(req,res){
    console.log("Getting file list from controller ...");
    controller.getListFiles(req,res);
})

app.get("/files/:name",function(req,res){
    console.log("Downloading file from controller ...");
    controller.download(req,res);
})

// Take any port number of your choice which
// is not taken by any other process
app.listen(8080,function(error) {
    if(error) throw error
        console.log("Server created Successfully on PORT 8080")
})