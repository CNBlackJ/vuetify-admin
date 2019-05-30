const Controller = require('egg').Controller
const joi = require('joi')

module.exports = class ManagerController extends Controller {
  constructor (ctx, serviceName, validators) {
    super(ctx)
    this.serviceName = serviceName
    this.validators = validators
  }

  async create() {
    const { ctx } = this
    ctx.validator(this.validators.create)
    const payload = ctx.request.body
    const result = await ctx.service[this.serviceName].create(payload)
    ctx.body = result
    ctx.status = 201
  }

  async index () {
    const { ctx } = this
    ctx.validator({
      query: joi.object().keys({
        limit: joi.number(),
        skip: joi.number(),
        sort: joi.string()
      }),
      ...this.validators.index
    })
    const payload = ctx.query
    const results = await ctx.service[this.serviceName].list(payload)
    ctx.body = results
    ctx.status = 200
  }

  async show () {
    const { ctx } = this
    ctx.validator({
      params: joi.object().keys({
        id: joi.string().required()
      }),
      ...this.validators.index
    })
    const id = ctx.params.id
    const result = await ctx.service[this.serviceName].get(id)
    if (result) {
      ctx.body = result
      ctx.status = 200
    } else {
      ctx.status = 404
    }
  }

  async update () {
    const { ctx } = this
    ctx.validator({
      params: joi.object().keys({
        id: joi.string().required()
      }),
      ...this.validators.update
    })
    const id = ctx.params.id
    const payload = ctx.request.body
    const isExist = await ctx.service[this.serviceName].get(id)
    if (isExist) {
      const result = await ctx.service[this.serviceName].update(id, payload)
      ctx.body = result
      ctx.status = 200
    } else {
      ctx.status = 404
    }
  }

  async destroy () {
    const { ctx } = this
    ctx.validator({
      params: joi.object().keys({
        id: joi.string().required()
      }),
      ...this.validators.destroy
    })
    const id = ctx.params.id
    const isExist = await ctx.service[this.serviceName].get(id)
    if (isExist) {
      await ctx.service.manager.delete(id)
      ctx.status = 204
    } else {
      ctx.status = 404
    }
  }
}
