const express = require('express');
const router = express.Router();
const passport = require('passport')
const controller = require('../controllers/sendMsg')



router.post('/sendMsg', passport.authenticate('user-rule', {session: false}), controller.sendMsg, ()=>{console.log('tut')})

    



module.exports = router;