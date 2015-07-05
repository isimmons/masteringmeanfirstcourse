require('dotenv').load();
module.exports = require('./env/' + process.env.NODE_ENV + '.js');