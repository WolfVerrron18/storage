import mongoose from 'mongoose'

const RoleScheme = new mongoose.Schema({
  name: { type: String, required: true },
})
export default mongoose.model('Role', RoleScheme)
