import RoleModel from '../models/RoleModel.js'

class RoleService {
  get roles() {
    return {
      get: (id) => RoleModel.findById(id),

      create: (payload) => RoleModel.create(payload),

      remove: (id) => RoleModel.findByIdAndDelete(id),
    }
  }
}

export default new RoleService()
