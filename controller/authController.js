const User = require('../models/User')
 
class authLogin {
    static loginPage (req, res) {
        res.render('auth/login', {layout: 'main'})
    }



}

class authRegister {
    static registerPage (req, res) {
        res.render('auth/register', {layout: 'main'})
    }
}

module.exports = {authLogin, authRegister};