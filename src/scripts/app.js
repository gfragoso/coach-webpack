'use strict';

var Loader = require('loader');
var modules = Loader.loadModules();

var app = angular.module('app', [
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap'
].concat(modules));

Loader.loadComponents(app);

module.exports = app;
