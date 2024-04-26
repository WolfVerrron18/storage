import RoleService from '../services/RoleService.js'

class RoleController {
  /** @function
   * @name get - Получение пользователя */
  async get(req, res) {
    try {
      const user = await RoleService.roles.get(req.params.id)

      res.status(200).json(user)
    } catch (e) {
      res.status(500).json({ message: 'Ошибка' })
    }
  }

  /** @function
   * @name create - Создание пользователя */
  async create(req, res) {
    try {
      const user = await RoleService.roles.create(req.body)

      res.status(200).json(user)
    } catch (e) {
      res.status(500).json(e)
    }
  }

  /** @function
   * @name remove - Удаление пользователя */
  async remove(req, res) {
    try {
      await RoleService.roles.remove(req.params.id)

      res.status(200)
    } catch (e) {
      res.status(500).json(e)
    }
  }
}

export default new RoleController()
