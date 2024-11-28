const User = require('../models/User')
const bcrypt = require('bcryptjs')
 
class authLogin {
    static loginPage (req, res) {
        res.render('auth/login', {layout: 'main'})
    }

    static async login (req, res) {
        const {userCode, password} = req.body

        // Procura pelo código de usuário
        const user = await User.findOne({where: {userCode: userCode}})

        // Confirma se o código do usuário existe
        if (!user) {
            req.flash('message', 'Código de Usuário não encontrado. Tente novamente.')
            res.render('auth/login', {layout: 'main'});
            return
        }

        // Confirma se a senha está correta
        const passwordMatch = bcrypt.compareSync(password, user.password)
        if (!passwordMatch) {
            req.flash('message', 'Senha inválida. Tente novamente.')
            res.render('auth/login', {layout: 'user'});
            return
        }

        // Verifica se o usuário possui ocupação. Se não tiver, não está aprovado no sistema, portanto será redirecionado para tal página.
        const useroccupation = await User.findOne({where: {userCode: userCode}})
        if (useroccupation.occupation == null) {
            res.render('auth/auth', {layout: 'auth'})
        }

        // Se o código e senha estiverem corretos, logar no sistema
        req.session.userid = user.id
        req.session.save()

        const usuario = await User.findOne({where: {userCode: userCode}})
        res.render('dashboard/dashboard', {usuario})
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

module.exports = {authLogin, authRegister, authReset};