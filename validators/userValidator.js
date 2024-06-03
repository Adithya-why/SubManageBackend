//used to store server side validators
//this is dont before passing to controllers

const { body, validationResult } = require("express-validator")



exports.new_user = [
    //first defined validtor

    body("username").notEmpty().trim().escape(),
    body("email").notEmpty().isEmail(),

    //validate
    //if error send error
    //if not continue to controller
    (req,res,next)=>{
        let vresult = validationResult(req);

        if(!vresult.isEmpty()){
            res.json({msg: "VAL error", err: vresult});
        }

        else{
            next();
        }
    }
]