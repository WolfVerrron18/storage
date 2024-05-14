import express from 'express'
import cookieParser from 'cookie-parser'
import { connectionDatabase } from './database/database.js'

/** @module Env - Кросс доменные запросы */
import 'dotenv/config'

import AuthRouter from './routers/AuthRouter.js'
import UserRouter from './routers/UserRouter.js'
import RoleRouter from './routers/RoleRouter.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', AuthRouter)
app.use('/api', UserRouter)
app.use('/api', RoleRouter)

connectionDatabase().then(() => {
  app.listen(port, () => {
    console.log(
      `The application is running on port ${port} and connected to the database`,
    )
  })
})
