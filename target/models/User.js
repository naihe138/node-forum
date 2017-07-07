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
  const Schema = _mongoose2.default.Schema;
  const ObjectId = Schema.ObjectId;
  const UserSchema = new Schema({
    name: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    nickname: {
      type: String
    },
    about: {
      type: String
    }
  });

  $.mongodb.model('User', UserSchema);
  $.model.User = $.mongodb.model('User');
  done();
};