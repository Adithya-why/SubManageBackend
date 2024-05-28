let Subscription = require("../models/subscription");
let asyncHandler = require("express-async-handler");

//controller for subscriptions
//used to created,update,find and delete subscriptions



//create sub 
exports.create_sub = asyncHandler(async (req,res)=>{
    
    let sub = new Subscription({
        name: req.body.name,
        price: req.body.price,
        startDate: req.body.startDate,
        duration: req.body.duration,
        user: req.body.user,
    });

    await sub.save();

    console.log(sub);
    res.send(sub);
});



