'use strict';
/**
 * @file
 * @author 何文林
 * @date 16/12/1
 */

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (done) {
  _mongoose2.default.Promise = global.Promise;
  const conn = _mongoose2.default.createConnection($.config.get('db.mongodb'));
  $.mongodb = conn;
  $.model = {};
  done();
};