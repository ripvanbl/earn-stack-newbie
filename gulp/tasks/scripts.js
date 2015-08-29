'use strict';

var config = require('../config'),
    handleErrors = require('../handleErrors'),
    concat = require('gulp-concat'),
    gulp = require('gulp');

gulp.task('scripts', buildScripts);

//////////

function buildScripts() {
    var src = config.clientApp.scripts.src,
        dest = config.build.root + config.build.scripts.dest;

    return gulp.src(src)
        .on('error', handleErrors)
        .pipe(concat(config.build.scripts.bundle.app))
        .pipe(gulp.dest(dest));
}
