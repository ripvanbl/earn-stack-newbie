var express = require('express');
var redis = require("redis");

module.exports = (function() {
    'use strict';

    var api = express.Router();
    var db = redis.createClient();

    api.get('/', function(req, res) {
        db.lrange('mylist', '0', '-1', function(err, reply) {
            res.json(reply);
        });
    });

    api.post('/', function(req, res) {
        db.lpush('mylist', req.body.item);
        res.json({
            "result": "received"
        });
    });

    return api;
})();
