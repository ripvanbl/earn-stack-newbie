'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    del = require('del');

gulp.task('clean', cleanBuildDir);

//////////

function cleanBuildDir(cb) {
    console.log('>>> cleaning: ' + config.build.root);
    del(config.build.root + '*', cb);
}   