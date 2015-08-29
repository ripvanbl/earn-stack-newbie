'use strict';

var config = require('../config'),
    gulp = require('gulp');

gulp.task('views', buildViews);

//////////

function buildViews() {
    gulp.src(config.clientApp.views.src)
        .pipe(gulp.dest(config.build.root));
}