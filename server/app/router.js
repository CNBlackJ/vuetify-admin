'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app

  const admin = app.role.can('admin')
  app.passport.mount('github')

  router.get('/', app.jwt, controller.home.index)

  // Auth
  router.post('/api/auth', controller.auth.login)

  // Manager
  router.resources('managers', '/api/managers', app.jwt, admin, controller.manager)
};
