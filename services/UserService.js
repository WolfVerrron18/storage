import UserModel from '../models/UserModel.js'

class UserService {
  get users() {
    return {
      /** @function
       * @name get - Получение пользователя */
      get: (id) => UserModel.findById(id),

      /** @function
       * @name get - Получение пользователя */
      findByParameter: (key, value) => UserModel.findOne({ [key]: value }),

      /** @function
       * @name create - Создание пользователя */
      create: (payload) => UserModel.create(payload),

      /** @function
       * @name remove - Удаление пользователя */
      remove: (id) => UserModel.findByIdAndDelete(id),
    }
  }
}

export default new UserService()
