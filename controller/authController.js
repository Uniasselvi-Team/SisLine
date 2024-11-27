class authController {
    static loginPage (req, res) {
        res.render('auth/login', {layout: 'main'})
    }
}

module.exports = authController