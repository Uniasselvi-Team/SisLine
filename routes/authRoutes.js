const express = require('express')
const router = express.Router()
const app = express();


const { authLogin, authRegister, authError}  = require('../controller/authController');

 //const authRegister = require('../controller/authController')

router.get('/login', authLogin.loginPage);
router.post('/login', authLogin.login)

router.get('/register', authRegister.registerPage);
router.post('/registerNewUser', authRegister.registerNewUser)

router.get ('/reset', authRegister.resetPasswordPage);

router.get('*', authError.errorPage);

module.exports = router;