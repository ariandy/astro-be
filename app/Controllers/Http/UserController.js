'use strict'
const User = use('App/Models/User');
class UserController {
    async index ({ request, response, view }) {
        let users = await User.all()
        return response.json(users)
    }
    async store ({ request, response }) {
        const userInfo = request.only(['name', 'email', 'phonenumber'])
        const user = new User()
        user.name = userInfo.name
        user.email = userInfo.email
        user.phonenumber = userInfo.phonenumber
        await user.save()
        return response.status(201).json(user)
    }
}

module.exports = UserController
