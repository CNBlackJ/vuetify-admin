const BaseService = require('./baseService')

module.exports = class AddressService extends BaseService {
  constructor (ctx) {
    super(ctx, 'Address')
  }
}
