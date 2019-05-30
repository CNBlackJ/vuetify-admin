const Controller = require('egg').Controller
const joi = require('joi')

class ManagerController extends Controller {
  async create() {
    const { ctx } = this
    ctx.validator({
      body: joi.object().keys({
        username: joi.string().required(),
        password: joi.string().required(),
        role: joi.number().required()
      })
    })
    const payload = ctx.request.body
    const manager = await ctx.service.manager.create(payload)
    ctx.body = manager
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
    const managers = await ctx.service.manager.list(payload)
    ctx.body = managers
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
    const manager = await ctx.service.manager.get(id)
    ctx.body = manager
    ctx.status = 200
  }

  async update () {
    const { ctx } = this
    ctx.validator({
      params: joi.object().keys({
        id: joi.string().required()
      }),
      body: joi.object().keys({
        username: joi.string(),
        password: joi.string(),
        role: joi.number()
      })
    })
    const id = ctx.params.id
    const payload = ctx.request.body
    const manager = await ctx.service.manager.update(id, payload)
    ctx.body = manager
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
    const manager = await ctx.service.manager.delete(id)
    ctx.body = manager
    ctx.status = 204
  }
}

module.exports = ManagerController
