let User = require("../models/user");
let asyncHandler = require("express-async-handler");
let bcrypt = require("bcryptjs");

//controller for user
//register and login users
//issues jwt


//register a new user
exports.register_user = asyncHandler(async (req,res)=>{

    //hash the pwd

    bcrypt.hash(req.body.password,10, asyncHandler(async(err,hash)=>{
        if(err){
            console.log("HAshing error");
        }else{

            let user = new User({
                username: req.body.username,
                p_hash: hash,
            });


            // await user.save();
            res.json({user: user});
        }
    }))
})