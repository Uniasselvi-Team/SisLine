const express = require('express')
const router = express.Router()
 
const mainController = require('../controller/mainController');
 
router.get('/home', mainController.main);

module.exports = router