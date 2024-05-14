import jwt from 'jsonwebtoken'

import bcrypt from 'bcrypt'

import UserService from '../services/UserService.js'
import RoleService from '../services/RoleService.js'

class AuthController {
  async login(req, res) {
    try {
      const user = await UserService.users.findByParameter(
        'login',
        req.body.login,
      )

      if (!user) throw new Error('User not found')

      const auth = await bcrypt.compare(req.body.password, user.password)

      if (!auth) throw new Error('Password invalid')

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: '1h',
      })

      res.status(200).json({ token })
    } catch (e) {
      return res.status(404).json(e.message)
    }
  }

  async logout(req, res) {
    res.status(200).json('LOGOUT')
  }

  async registration(req, res) {
    try {
      const foundRole = await RoleService.roles.get(req.body.role)

      const payload = { ...req.body, role: foundRole._id }

      const user = await UserService.users.create(payload)

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: '1h',
      })

      res.status(200).json({ token })
    } catch (e) {
      res.status(404).json(e)
    }
  }
}

export default new AuthController()
