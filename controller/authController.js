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

class authReset {

    static resetPage (req, res) {
        res.render('auth/reset', {layout: 'main'})
    }
}

class authError {

    static errorPage (req, res) {
        res.render('auth/error', {layout: 'error'})
    }
}



module.exports = {authLogin, authRegister, authReset, authError};