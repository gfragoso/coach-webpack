'use strict';

var app = angular.module('user', []);

var controllerContext = require.context('./controllers', false, /controller.js/);
controllerContext.keys().forEach(function(item) {
    controllerContext(item)(app);
});

module.exports = app;
