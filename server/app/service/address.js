const Service = require('egg').Service
const ObjectId = require('mongoose').Types.ObjectId

class AddressService extends Service {
  async create(payload) {
    const address = await this.ctx.model.Address.create(payload)
    return address
  }
  async list({ limit = 10, skip = 0, sort = '' }) {
    const addresss = await this.ctx.model.Address.find({
      isDeleted: false
    }).sort(sort).skip(Number(skip)).limit(Number(limit))
    return addresss
  }
  async get(id) {
    const address = await this.ctx.model.Address.find({
      _id: ObjectId(id),
      isDeleted: false
    })
    return address
  }
  async update(id, payload) {
    const address = await this.ctx.model.Address.findOneAndUpdate({
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

module.exports = AddressService