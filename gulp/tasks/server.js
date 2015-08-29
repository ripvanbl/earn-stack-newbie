'use strict';

var config = require('../config'),
    http = require('http'),
    express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    gulp = require('gulp');

gulp.task('server', startServer);   

//////////

function startServer(cb) {
    var app = express(),
    apiRoute = require(config.serverApp.routes.api),
    server = null;

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(config.build.root));
    app.use('/api', apiRoute);
    app.all('/*', serveIndexHtml);
    
    server = http.createServer(app);
    server.on('error', handleServerError);
    console.log('Starting server...');
    server.listen(config.serverApp.port, cb);
}

function serveIndexHtml(req, res) {
    res.sendFile('index.html', { root: config.build.root });
}

function handleServerError(err){
    console.log(err);
}