const express = require('express');
const router = express.Router();
const passport = require('passport')
const controller = require('../controllers/adminPanel')




router.get('/adminPanel', passport.authenticate('admin-rule', {session: false}), controller.adminPanel, ()=>{console.log('tut')})
router.get('/getAllUsers', passport.authenticate('admin-rule', {session: false}), controller.getAllUsers, ()=>{console.log('tut')})
router.delete('/removeUser/:id', passport.authenticate('admin-rule', {session: false}), controller.removeUser)





module.exports = router;