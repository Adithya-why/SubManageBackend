let User = require("../models/user");
let asyncHandler = require("express-async-handler");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

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
            //create use with hashed password
            let user = new User({
                username: req.body.username,
                p_hash: hash,
            });


            await user.save();
            

            //generate the jwt


            let payload = {
                id: user._id
            }


            let token = jwt.sign(payload,process.env.KEY,{expiresIn: "1d"});

            console.log("Token created");

            res.json({user: user, token: "Bearer "+token});
        }
    }))
})