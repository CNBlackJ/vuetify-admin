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
  }
};
