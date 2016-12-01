'use strict';
/**
 * @file
 * @author 何文林
 * @date 16/12/1
 */

import mongoose from 'mongoose';
module.exports = function(done){
  mongoose.Promise = global.Promise;
  const conn = mongoose.createConnection($.config.get('db.mongodb'));
  $.mongodb = conn;
  $.model = {};
  done();
};