const mongoose = require("mongoose");
const Schema = mongoose.Schema;



let Credential = new Schema({
    loginid: String,
    passwordHint: String,
    sub: {type: mongoose.Types.ObjectId, ref: "Subscription"}
});



module.exports = mongoose.model("Credential",Credential);