const Service = require('egg').Service
const ObjectId = require('mongoose').Types.ObjectId

class ManagerService extends Service {
  async create(payload) {
    const manager = await this.ctx.model.Manager.create(payload)
    return manager
  }
  async list({ limit = 10, skip = 0, sort = '' }) {
    const managers = await this.ctx.model.Manager.find({
      isDeleted: false
    }).sort(sort).skip(Number(skip)).limit(Number(limit))
    return managers
  }
  async get(id) {
    const manager = await this.ctx.model.Manager.find({
      _id: ObjectId(id),
      isDeleted: false
    })
    return manager
  }
  async update(id, payload) {
    const manager = await this.ctx.model.Manager.findOneAndUpdate({
      _id: ObjectId(id),
      isDeleted: false
    }, {
      $set: payload
    }, {
      new: true
    })
    return manager
  }
  async delete(id) {
    return this.update(id, { isDeleted: true })
  }
}

module.exports = ManagerService