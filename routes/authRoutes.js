const express = require('express')
const router = express.Router()
const app = express();


const { authLogin, authRegister, authReset, authError}  = require('../controller/authController');


router.get('/login', authLogin.loginPage);

router.get('/register', authRegister.registerPage);

router.get ('/reset', authReset.resetPage);

router.get('*', authError.errorPage);

module.exports = router;