const joi = require('joi')
const BaseController = require('./baseController')

const validators = {
  create: {
    body: joi.object().keys({
      username: joi.string().required(),
      password: joi.string().required(),
      role: joi.number().required()
    })
  },
  update: {
    body: joi.object().keys({
      username: joi.string(),
      password: joi.string(),
      role: joi.number()
    })
  }
}

module.exports = class ManagerController extends BaseController {
  constructor (ctx) {
    super(ctx, 'manager', validators)
  }
}
