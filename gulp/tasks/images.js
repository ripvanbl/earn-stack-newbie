'use strict';

var config = require('../config'),
    gulp = require('gulp');

gulp.task('images', buildImages);

//////////

function buildImages() {
    var dest = config.build.root + config.build.images.dest;
    
    gulp.src(config.clientApp.images.src)
        .pipe(gulp.dest(dest));
}