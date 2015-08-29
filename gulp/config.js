'use strict';

var fs = require('fs');

module.exports = {
    mode: 'dev',
    clientApp: {
        images: {
            src: ['app/client/**/*.{png,jpg,gif}']
        },
        scripts: {
            src: [
                'app/client/app.module.js',
                'app/client/**/*.js'
            ]
        },
        styles: {
            src: ['app/client/**/*.sass']
        },
        views: {
            src: [
                'app/client/index.html',
                'app/client/home/*.html'
            ]
        }
    },
    serverApp: {
        port: 3000,
        routes: {
            api: '../../app/server/routes/api.js'
        }
    },
    build: {
        root: 'build/',
        fonts: {
            dest: 'fonts/'
        },
        images: {
            dest: 'img/'
        },
        scripts: {
            entryFile: 'app/client/index.js',
            dest: 'scripts/',
            bundle: {
                app: 'app.js',
                vendor: 'vendor.js'
            }
        },
        styles: {
            dest: 'css/',
            bundle: {
                app: 'app.css',
                vendor: 'vendor.css'
            }
        }
    }
};
