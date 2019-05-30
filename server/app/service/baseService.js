const Service = require('egg').Service
const ObjectId = require('mongoose').Types.ObjectId

class BaseService extends Service {
  constructor (ctx, resource) {
    super(ctx)
    this.resource = resource
  }

  async create(payload) {
    const result = await this.ctx.model[this.resource].create(payload)
    return result
  }
  async list({ limit = 10, skip = 0, sort = '' }) {
    const results = await this.ctx.model[this.resource].find({
      isDeleted: false
    }).sort(sort).skip(Number(skip)).limit(Number(limit))
    return results
  }
  async get(id) {
    const result = await this.ctx.model[this.resource].findOne({
      _id: ObjectId(id),
      isDeleted: false
    })
    return result
  }
  async update(id, payload) {
    const result = await this.ctx.model[this.resource].findOneAndUpdate({
      _id: ObjectId(id),
      isDeleted: false
    }, {
      $set: payload
    }, {
      new: true
    })
    return result
  }
  async delete(id) {
    return this.update(id, { isDeleted: true })
  }
}

module.exports = BaseService