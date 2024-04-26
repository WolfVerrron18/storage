import UserService from '../services/UserService.js'
import RoleService from '../services/RoleService.js'
class UserController {
  /** @function
   * @name get - Получение пользователя */
  async get(req, res) {
    try {
      const user = await UserService.users.get(req.params.id)

      res.status(200).json(user)
    } catch (e) {
      res.status(500).json({ message: 'Ошибка' })
    }
  }

  /** @function
   * @name create - Создание пользователя */
  async create(req, res) {
    try {
      const foundRole = await RoleService.roles.get(req.body.role)

      const payload = { ...req.body, role: foundRole._id }

      const user = await UserService.users.create(payload)

      console.log(user)

      res.status(200).json(user)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  /** @function
   * @name remove - Удаление пользователя */
  async remove(req, res) {
    try {
      await UserService.users.remove(req.params.id)

      res.status(200)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new UserController()
