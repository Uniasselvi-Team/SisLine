const express = require('express')
const router = express.Router()
const app = express()

const dashboardController = require('../controller/dashboardController')

router.get('/mainDashboard', dashboardController.dashboardPage)

module.exports = router