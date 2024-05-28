const express = require("express")
let Router = express.Router();

let subController = require("../controllers/subController");
let userController = require("../controllers/userController");
//main page of the app
//links appropriate controllers to routes

//get all subs
Router.get("/", subController.findall_sub);

//get a specific sub
Router.get("/:id",subController.find_sub);


//create new sub
Router.post("/", subController.create_sub);


//update a sub
Router.put("/:id", subController.update_sub);


//delete a sub
Router.delete("/:id",subController.delete_sub);


//register a new user
Router.post("/register",userController.register_user);


//login
Router.post("/login", userController.login_user)

module.exports = Router;