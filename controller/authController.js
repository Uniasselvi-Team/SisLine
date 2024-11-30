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

    static resetPasswordPage (req, res) {
        res.render('auth/reset', {layout: 'main'})
    }

    static async registerNewUser (req, res) {
        const {name, password, email, confirmpassword } = req.body

        if( password != confirmpassword) {
            req.flash('message', 'As senhas não conferem, tente novamente!')
            res.render('auth/register', {layout: 'main'});
            return
        }

        // Criar senha
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = {
            userCode: Math.floor(Math.random()*10000),
            name,
            email,
            password: hashedPassword,
            role: null,
            createdAt: now(),
            updatedAt: null
        }

        try {
            const createdUser = await User.create(user)
            const userId = createdUser.id
            const newUser = await User.findOne({where: {id:userId}})

            req.flash('message', `Cadastro realizado com sucesso. Seu código de usuário é ${newUser.userCode}`)
            res.render('auth/login', {layout: 'main'})

        } catch (error) {
            console.log(error)
        }
    }
}

class authError {
    static errorPage (req, res) {
        res.render('auth/error', {layout: 'error'})
    }
}



module.exports = {authLogin, authRegister, authError};