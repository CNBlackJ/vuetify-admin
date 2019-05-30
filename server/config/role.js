module.exports = app => {
  app.role.use('admin', ctx => ctx.state.user && ctx.state.user.isAdmin)
  app.role.use('user', ctx => ctx.state.user)
}