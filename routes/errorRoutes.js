const express = require('express')
const router = express.Router()

const { authError }  = require('../controller/errorController');
//const authRegister = require('../controller/authController')

router.get('/error', authError.errorPage);


module.exports = router;