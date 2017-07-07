/**
 * @file
 * @author 何文林
 * @date 16/12/14
 */

import validator from 'validator';

module.exports = function (done) {
  $.method('user.add').check({
    name: {required: true, validator: (v) => validator.isLength(v, {min: 4, max: 26})},
    email: {required: true, validator: (v) => validator.isEmail(v)},
    password: {required: true, validator: (v) => validator.isLength(v, {min: 6})}
  });
  $.method('user.add').register(async function(params, callback){
    callback(params);
  });
  done();
};
