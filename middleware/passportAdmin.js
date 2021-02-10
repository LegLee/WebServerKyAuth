const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('users')

const keys = require('../config/keys.js')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try{
                const user = await User.findById(payload.userId).select('email id')
                if(user && payload.userId == '601b7e86e5a1ac1d58a52454'){
                        console.log('admin here')
                        done(null, user)
                } else{
                    done(null, false)
                }
            } catch(err){
                console.log(err)
            }

        })
    )
}