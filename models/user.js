const mongoose = require("mongoose");
let Schema = mongoose.Schema;



let User = new Schema({
    username: String,
    p_hash: String,
    email: String,
});


module.exports = mongoose.model("User",User);