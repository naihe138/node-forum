'use strict';
/**
 * @file
 * @author 何文林
 * @date 16/12/2
 */

module.exports = function (done) {
  $.router.get('/', (req, res, next) => {
    res.end('//////');
    done();
  });
};