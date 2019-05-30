'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mogoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  validator: {
    enable: true,
    package: 'egg-joi-validate'
  },
  passport: {
    enable: true,
    package: 'egg-passport'
  },
  passportGithub: {
    enable: true,
    package: 'egg-passport-github'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  userrole: {
    enable: true,
    package: 'egg-userrole'
  }
}
