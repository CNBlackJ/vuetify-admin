const Controller = require('egg').Controller
const joi = require('joi')

const users = [
  { username: 'vinli', password: '1234', role: 1 },
  { username: 'zhang', password: 'qwe123', role: 2 }
]

module.exports = class AuthController extends Controller {
  login () {
    const { app, ctx } = this
    ctx.validator({
      body: joi.object().keys({
        username: joi.string().required(),
        password: joi.string().required()
      })
    })
    const paylod = ctx.request.body
    const { username, password } = paylod
    const user = users.find(user => user.username === username && user.password === password)
    if (user) {
      user.isAdmin = user.role === 1
      const token = app.jwt.sign({ user }, app.config.jwt.secret)
      ctx.body = token
    } else {
      ctx.status = 404
    }
  }
}
