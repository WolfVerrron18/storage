import Router from 'express'

/** @class RoleController - Класс контроллера для работы с ролями */
import RoleController from '../controllers/RoleController.js'

const RoleRouter = new Router()

RoleRouter.post('/roles', RoleController.create)
RoleRouter.get('/roles/:id', RoleController.get)
RoleRouter.delete('/roles/:id', RoleController.remove)

export default RoleRouter
