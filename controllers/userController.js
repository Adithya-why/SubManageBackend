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

            //check if user with same username or email id exists

            let prevUser = await User.findOne({$or: [{username: req.body.username}, {email: req.body.email}]});

            if(prevUser){
                console.log(prevUser);
                res.json({msg: "Same username or Email already used"});
            }



            else{
            //create use with hashed password
            let user = new User({
                username: req.body.username,
                p_hash: hash,
                email: req.body.email,
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
    }
    }))
});




exports.login_user = asyncHandler(async (req,res)=>{
    //check if user exists
    let user = await User.findOne({username: req.body.username});


    //user not found
    if(!user){

        res.json({msg: "No user Found", login:0});
    }

    else{

        //check password
        let match = await bcrypt.compare(req.body.password, user.p_hash);


        //correct pass word
        if(match){


            //generate the jwt


            let payload = {
                id: user._id
            }


            let token = jwt.sign(payload,process.env.KEY,{expiresIn: "1d"});

            console.log("Token created");

            res.json({user: user, token: "Bearer "+token, login:1});
        }


        else{
            res.json({msg: "Wrong password buuuuuud", login:0});
        }
    }
});


//used for sso
//used for login with jwt
//user has jwt but no username and password
//simply send the corresponding user object back
exports.login_jwt = asyncHandler(async (req,res)=>{
    let user = req.user;


    res.json({msg:"Login success sso", user: user});
})