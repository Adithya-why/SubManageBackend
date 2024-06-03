const express = require("express")
let Router = express.Router();

let passport = require("passport");

let subController = require("../controllers/subController");
let userController = require("../controllers/userController");


let userValidator = require("../validators/userValidator");
let subValidator = require("../validators/subValidator");
//main page of the app
//links appropriate controllers to routes

//get all subs
Router.get("/",passport.authenticate('jwt',{session: false}) , subController.findall_sub);

//get a specific sub
Router.get("/:id",passport.authenticate('jwt',{session: false}),subController.find_sub);


//create new sub
//uses validator
Router.post("/", passport.authenticate('jwt',{session: false}), subValidator.validate_sub , subController.create_sub);


//update a sub
Router.put("/:id",passport.authenticate('jwt',{session: false}), subValidator.validate_sub , subController.update_sub);


//delete a sub
Router.delete("/:id", passport.authenticate('jwt',{session: false}),subController.delete_sub);


//register a new user
//uses validation
Router.post("/register", userValidator.new_user ,userController.register_user);


//login
Router.post("/login", userController.login_user)


//jwt login
//send the user object back
//jwt already there
Router.post("/loginjwt", passport.authenticate('jwt',{session: false}), userController.login_jwt);

module.exports = Router;