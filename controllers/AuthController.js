import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt'

import UserService from '../services/UserService.js'

class AuthController {
  async login(req, res) {
    try {
      const user = await UserService.users.findByParameter(
        'login',
        req.body.login,
      )
      console.log(user)
      if (!user) throw new Error('User not found')

      const auth = await bcrypt.compare(req.body.password, user.password)

      if (!auth) throw new Error('Password invalid')

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: '1h',
      })

      res.cookie('jwt', token)
    } catch (e) {
      return res.status(404).json(e.message)
    }
  }

  registration(req, res) {}
}

export default new AuthController()
