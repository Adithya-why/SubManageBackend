const express = require("express")
let Router = express.Router();

let subController = require("../controllers/subController");
//main page of the app
//links appropriate controllers to routes


Router.get("/",(req,res,next)=>{
    res.send("You are in sub page")
});


//create new sub
Router.post("/", subController.create_sub);


module.exports = Router;