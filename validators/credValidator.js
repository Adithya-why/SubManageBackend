const {body, validationResult} = require("express-validator");


//used to validate credentials


exports.validate_cred = [
    //define validators


    body("loginid").notEmpty().trim().escape(),
    body("passwordHint").trim().escape(),

    //validate request
    (req,res,next)=>{
        let err = validationResult(req);


        if(!err.isEmpty()){
            res.jsont({msg: "ERRORS", err:err});
        }

        else{

            next();
        }



    }
]