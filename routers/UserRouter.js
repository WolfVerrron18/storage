import Router from 'express'

/** @class UserController - Класс контроллера для работы с пользователями */
import UserController from '../controllers/UserController.js'

const UserRouter = new Router()

UserRouter.post('/users', UserController.create)
UserRouter.get('/users/:id', UserController.get)
UserRouter.delete('/users/:id', UserController.remove)

export default UserRouter
