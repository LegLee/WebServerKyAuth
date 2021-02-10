const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User.js')
const keys = require('../config/keys.js')
const errorHandler = require('../utils/errorHandler.js')

module.exports.adminPanel =async function(req, res) {
            res.status(200).json({
                message: 'welcome admin'
            })
}


module.exports.getAllUsers = async function (req, res){
try{
    const users = await User.find()
    res.status(200).json(users)
}catch (err){
    errorHandler(res, err)
}
}

module.exports.removeUser = async function(req, res){
    try{
        console.log('PARAMS: '+req.params.id)
        await User.deleteOne({_id: req.params.id})
        res.status(200).json({
            message:"Success!"
        })
    } catch (err){
        errorHandler(res, err)
    }
}


