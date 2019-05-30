const Service = require('egg').Service
const ObjectId = require('mongoose').Types.ObjectId

class BaseService extends Service {

  constructor (ctx, resource) {
    super(ctx)
    this.resource = resource
  }

  async create(payload) {
    const address = await this.ctx.model[this.resource].create(payload)
    return address
  }
  async list({ limit = 10, skip = 0, sort = '' }) {
    const addresss = await this.ctx.model[this.resource].find({
      isDeleted: false
    }).sort(sort).skip(Number(skip)).limit(Number(limit))
    return addresss
  }
  async get(id) {
    const address = await this.ctx.model[this.resource].find({
      _id: ObjectId(id),
      isDeleted: false
    })
    return address
  }
  async update(id, payload) {
    const address = await this.ctx.model[this.resource].findOneAndUpdate({
      _id: ObjectId(id),
      isDeleted: false
    }, {
      $set: payload
    }, {
      new: true
    })
    return address
  }
  async delete(id) {
    return this.update(id, { isDeleted: true })
  }
}

module.exports = BaseService