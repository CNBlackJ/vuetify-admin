const joi = require('joi')
const BaseController = require('./baseController')

const validators = {
  create: {
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
  },
  update: {
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
  }
}

module.exports = class AddressController extends BaseController {
  constructor (ctx) {
    super(ctx, 'manager', validators)
  }
}
