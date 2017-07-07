'use strict';
/**
 * @file
 * @author 何文林
 * @date 16/12/1
 */

import mongoose from 'mongoose';

module.exports = function(done){
  const Schema = mongoose.Schema;
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
}