import mongoose from 'mongoose'

/** @module bcrypt - Модуль шифрования */
import bcrypt from 'bcrypt'

const UserScheme = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  patronymic: { type: String, required: true },
  role: { type: 'ObjectId', ref: 'Role', required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
})

UserScheme.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()

  this.password = await bcrypt.hash(this.password, salt)

  next()
})

export default mongoose.model('User', UserScheme)
