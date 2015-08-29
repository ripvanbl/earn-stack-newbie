'use strict';

var config = require('../config'),
    argv = require('yargs').argv,
    gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('start', ['clean'], startItUp);

//////////

function startItUp(cb) {
    config.mode = argv.mode || 'dev';
    runSequence(['scripts', 'views', 'images', 'styles'], 'server', cb);
}