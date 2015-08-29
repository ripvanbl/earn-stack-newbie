'use strict';

var config = require('../config'),
    handleErrors = require('../handleErrors'),
    concat = require('gulp-concat'),
    gulp = require('gulp');

gulp.task('styles', buildStyles);

//////////

function buildStyles() {
    var src = config.clientApp.styles.src,
        dest = config.build.root + config.build.styles.dest;

    return gulp.src(src)
        .on('error', handleErrors)
        .pipe(concat(config.build.styles.bundle.app))
        .pipe(gulp.dest(dest));
}
