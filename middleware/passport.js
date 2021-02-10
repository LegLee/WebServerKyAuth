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
    passport.use('admin-rule',
        new JwtStrategy(options, async (payload, done) => {
            try{
                const user = await User.findById(payload.userId).select('email id isAdmin')
                if(user && user.isAdmin == true){
                    console.log(user)
                    console.log('Admin is here!')
                    done(null, user)
                } else{
                    done(null, false)
                }
            } catch(err){
                console.log(err)
            }

        })
    )

    passport.use('user-rule',
    new JwtStrategy(options, async (payload, done) => {
        try{

            const user = await User.findById(payload.userId).select('email id isAdmin')
            if(user){
                console.log(user)
                console.log('User is here!')
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


