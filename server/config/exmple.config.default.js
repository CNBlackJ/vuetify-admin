/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558971736808_2986';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ 'http://localhost:8080' ]
  }

  config.cors = {
    credentials:true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/shop',
      options: {}
    },
  }

  config.passportGithub = {
    key: '',
    secret: '',
    callbackURL: 'http://127.0.0.1:7001/api/managers',
    // proxy: false,
  }

  return {
    ...config,
    ...userConfig,
  };
};
