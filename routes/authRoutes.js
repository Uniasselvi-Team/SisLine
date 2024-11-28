const express = require('express')
const router = express.Router()

const { authLogin, authRegister, authReset }  = require('../controller/authController');

router.get('/login', authLogin.loginPage);
router.post('/login', authLogin.login)

router.get('/register', authRegister.registerPage);

router.get ('/reset', authReset.resetPage);


module.exports = router;