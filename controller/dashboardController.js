class dashboardController {
    static dashboardPage (req, res) {
        res.render('dashboard/mainDashboard', {layout: 'main'})
    }
}

module.exports = dashboardController