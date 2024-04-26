import Router from 'express'

/** @class AuthController - Класс контроллера для работы с авторизацией */
import AuthController from '../controllers/AuthController.js'

const AuthRouter = new Router()

AuthRouter.post('/login', AuthController.login)
AuthRouter.post('/registration', AuthController.registration)

export default AuthRouter
