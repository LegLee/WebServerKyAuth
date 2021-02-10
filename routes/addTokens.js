const express = require('express');
const router = express.Router();
const passport = require('passport')
const controller = require('../controllers/addTokens')

router.get('/addTokens', passport.authenticate('jwt', {session: false}), controller.addTokens)






module.exports = router;