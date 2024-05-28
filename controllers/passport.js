const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

let User = require("../models/user");

//options to pass in key
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.KEY,
}



//add the strategy to global passport object

module.exports = (passport) => {
    passport.use(new JWTStrategy(opts, async(payload, done)=>{
        
        User.findById(payload.id).then((user,err)=>{
            if(err){
                done(err,false)
            }

            else if(user){
                done(null,user)
            }

            else{
                done(null,false)
            }
        })
        
    }))
}