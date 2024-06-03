//used to store server side validators
//this is done before passing to controllers

const { body, validationResult } = require("express-validator");


exports.validate_sub = [
    //define validators

    body("name").notEmpty().trim().escape(),
    body("price").notEmpty().escape(),
    body("startDate").notEmpty(),
    body("duration").notEmpty().escape(),


    //validate
    //if error send error
    //if not continue to controller


    (req,res,next) =>{
        let vresult = validationResult(req);

        if(!vresult.isEmpty()){
            res.json({msg: "VAL error", err: vresult});
        }

        else{
            next();
        }
    }
]