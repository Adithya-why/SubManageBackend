const mongoose = require("mongoose");
const Schema = mongoose.Schema;



let Subscription = new Schema({
    name: String,
    price: Number,
    startDate: String,
    duration: Number,
    user: {type: mongoose.Types.ObjectId, ref: "User"}
});


module.exports = mongoose.model("Subscription", Subscription);