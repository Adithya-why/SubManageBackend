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

    console.log(sub);

    await sub.save();

    
    res.json(sub);
});



//find all subs
exports.findall_sub = asyncHandler(async (req,res)=>{
    let subs = await Subscription.find();

    res.json({subs: subs,msg: "fineyall"});
});



//find a sepcific sub with id sub
exports.find_sub = asyncHandler(async (req,res)=>{
    let subs = await Subscription.findById(req.params.id);

    res.json({subs: subs,msg: "fineyall"});
});


//update a specifc sub
exports.update_sub = asyncHandler(async(req,res)=>{
    let sub = new Subscription({
        name: req.body.name,
        price: req.body.price,
        startDate: req.body.startDate,
        duration: req.body.duration,
        user: req.body.user,
        _id: req.params.id,
    });

    let nsub = await Subscription.findByIdAndUpdate(req.params.id,sub,{});
    console.log("Updated");

    res.json({ms:"Updated", nsub: nsub});
});



//delete a specific sub

exports.delete_sub = asyncHandler(async (req,res)=>{

    await Subscription.findByIdAndDelete(req.params.id);

    res.json({deleted: "true"});
})

