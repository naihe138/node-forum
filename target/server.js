'use strict';
/**
 * @file 服务器js
 * @author 何文林
 * @date 16/11/30
 */

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _projectCore = require('project-core');

var _projectCore2 = _interopRequireDefault(_projectCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.$ = new _projectCore2.default();

// 添加配置文件

$.init.add(done => {
  $.config.load(_path2.default.resolve(__dirname, 'config.js'));
  const env = process.env.NODE_ENV || null;
  if (env) {
    $.config.load(_path2.default.resolve(__dirname, '../config', env + '.js'));
  }
  $.env = env;
  done();
});

// 初始化数据库
$.init.load(_path2.default.resolve(__dirname, 'init', 'mongodb.js'));

// 初始化models
$.init.load(_path2.default.resolve(__dirname, 'models'));

// 初始化
$.init(err => {
  if (err) {
    console.log(err);
    process.exit(-1);
  } else {
    console.log('inited--env==' + $.env);
  }

  const user = new $.model.User({
    name: `username${ $.utils.date('Ymd') }`,
    password: '123456',
    nickname: '测试用户'
  });
  user.save(console.log);
});