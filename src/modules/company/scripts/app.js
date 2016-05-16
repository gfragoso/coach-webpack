var app = angular.module('company', []);

var configContext = require.context('./configs', false, /config.js/);
configContext.keys().forEach(function(item) {
    configContext(item)(app);
});

var controllerContext = require.context('./controllers', false, /controller.js/);
controllerContext.keys().forEach(function(item) {
    controllerContext(item)(app);
});

module.exports = app;
