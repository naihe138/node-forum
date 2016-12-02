'use strict';
/**
 * @file
 * @author 何文林
 * @date 16/12/2
 */

module.exports = function (done) {
  $.router.get('/', (req, res, next) => {
    res.end(`还不错哦，现在背景时间是${new Date()}`);
    done();
  });
};