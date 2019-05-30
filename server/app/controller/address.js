const Controller = require('egg').Controller
const joi = require('joi')

class AddressController extends Controller {
  async create() {
    const { ctx } = this
    ctx.validator({
      body: joi.object().keys({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        addressLine1: joi.string().required(),
        addressLine2: joi.string().required(),
        city: joi.string().required(),
        country: joi.string().required(),
        state: joi.string().required(),
        zipcode: joi.string().required(),
        mobile: joi.string().required(),
        mobilePrefix: joi.string().required()
      })
    })
    const payload = ctx.request.body
    const address = await ctx.service.address.create(payload)
    ctx.body = address
    ctx.status = 201
  }

  async index () {
    const { ctx } = this
    ctx.validator({
      query: joi.object().keys({
        limit: joi.number(),
        skip: joi.number(),
        sort: joi.string()
      })
    })
    const payload = ctx.query
    const addresss = await ctx.service.address.list(payload)
    ctx.body = addresss
    ctx.status = 200
  }

  async show () {
    const { ctx } = this
    ctx.validator({
      params: joi.object().keys({
        id: joi.string().required()
      })
    })
    const id = ctx.params.id
    const address = await ctx.service.address.get(id)
    ctx.body = address
    ctx.status = 200
  }

  async update () {
    const { ctx } = this
    ctx.validator({
      params: joi.object().keys({
        id: joi.string().required()
      }),
      body: joi.object().keys({
        firstName: joi.string(),
        lastName: joi.string(),
        addressLine1: joi.string(),
        addressLine2: joi.string(),
        city: joi.string(),
        country: joi.string(),
        state: joi.string(),
        zipcode: joi.string(),
        mobile: joi.string(),
        mobilePrefix: joi.string()
      })
    })
    const id = ctx.params.id
    const payload = ctx.request.body
    const address = await ctx.service.address.update(id, payload)
    ctx.body = address
    ctx.status = 200
  }

  async destroy () {
    const { ctx } = this
    ctx.validator({
      params: joi.object().keys({
        id: joi.string().required()
      })
    })
    const id = ctx.params.id
    const address = await ctx.service.address.delete(id)
    ctx.body = address
    ctx.status = 204
  }
}

module.exports = AddressController
