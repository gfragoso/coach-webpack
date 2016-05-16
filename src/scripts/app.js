'use strict';

var loader = require('./core/loader');
var modules = loader.loadModules();

var app = angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap'
].concat(modules));

loader.loadComponents(app);

module.exports = app;
