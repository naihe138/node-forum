'use strict';

var _validator2 = require('validator');

var _validator3 = _interopRequireDefault(_validator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author 何文林
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @date 16/12/14
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

module.exports = function (done) {
  $.method('user.add').check({
    name: { required: true, validator: v => _validator3.default.isLength(v, { min: 4, max: 26 }) },
    email: { required: true, validator: v => _validator3.default.isEmail(v) },
    password: { required: true, validator: v => _validator3.default.isLength(v, { min: 6 }) }
  });
  $.method('user.add').register((() => {
    var _ref = _asyncToGenerator(function* (params, callback) {
      callback(params);
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })());
  done();
};