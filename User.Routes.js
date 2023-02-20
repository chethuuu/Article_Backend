const express = require('express');
const router = express.Router();
const UserController = require('./User.Controller')

//routes
router.route('/register').post(UserController.RegisterUser);
router.route('/login').post(UserController.LoginUser);

module.exports = router;