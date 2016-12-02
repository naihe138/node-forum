'use strict';
/**
 * @file 服务器js
 * @author 何文林
 * @date 16/11/30
 */
import path from 'path';
import ProjectCore from 'project-core';

global.$ = new ProjectCore();

// 添加配置文件

$.init.add(done => {
  $.config.load(path.resolve(__dirname, 'config.js'));
  const env = process.env.NODE_ENV || null;
  if(env) {
    $.config.load(path.resolve(__dirname, '../config', env + '.js'));
  }
  $.env = env;
  done();
});

// 初始化数据库
$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));

// 加载models
$.init.load(path.resolve(__dirname, 'models'));

// 加载express
$.init.load(path.resolve(__dirname, 'init', 'express.js'));

// 加载routers
$.init.load(path.resolve(__dirname, 'routes'));


// 初始化
$.init(err => {
  if(err) {
    console.log(err);
    process.exit(-1);
  } else {
    console.log('inited--env==' + $.env);
  }

});