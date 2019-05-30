const BaseService = require('./baseService')

module.exports = class ManagerService extends BaseService {
  constructor (ctx) {
    super(ctx, 'Manager')
  }
}
