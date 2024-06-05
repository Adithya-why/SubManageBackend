let Credential = require("../models/credential");
let asyncHandler = require("express-async-handler");

//used to store credentials of 



//to create credential
exports.create_cred = asyncHandler(async (req,res)=>{

    let credential = new Credential({
        loginid: req.body.loginid,
        passwordHint: req.body.passwordHint,
        sub: req.body.sub,
        user: req.user._id,
    });


    await credential.save();
    res.json({msg: "Saved", credential: credential});
});



//to get credentials of a specific subscription with sub id
exports.get_cred = asyncHandler(async (req,res)=> {

    let cred = await Credential.findOne({sub: req.params.subid});

    res.json({msg: "Success", cred: cred});
});



//to delete a cred with cred tit

exports.del_cred = asyncHandler(async (req,res)=>{
    let cred = await Credential.findByIdAndDelete(req.params.credid);
    res.json({msg: "Deleted", cred: cred})
});