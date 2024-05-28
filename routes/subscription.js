const express = require("express")
let Router = express.Router();

let subController = require("../controllers/subController");
//main page of the app
//links appropriate controllers to routes

//get all subs
Router.get("/", subController.findall_sub);

//get a specific sub
Router.get("/:id",subController.find_sub);


//create new sub
Router.post("/", subController.create_sub);


module.exports = Router;