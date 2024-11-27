const express = require('express')
const router = express.Router()

const { authLogin, authRegister }  = require('../controller/authController');
//const authRegister = require('../controller/authController')

router.get('/login', authLogin.loginPage);

router.get('/register', authRegister.registerPage);


module.exports = router;