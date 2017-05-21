switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.production');
    break;
  // case 'test':
  //   module.exports = require('./config/webpack.test');
  //   break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('../config/webpack.development');
}
