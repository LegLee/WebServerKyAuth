const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User.js')
const keys = require('../config/keys.js')
const errorHandler = require('../utils/errorHandler.js')

module.exports.addTokens =async function(req, res) {
    if(req.body.email == "admin@mail.ru") {
        if(user)
        res.status(200).json({
            message: 'welcome admin'
        })
    }
    else{
        res.status(401).json({
            message: 'u r not admin!'
        })
    }
}


