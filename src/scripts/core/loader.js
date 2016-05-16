'use strict';

module.exports = new function() {

    this.loadModules = loadModules;
    this.loadComponents = loadComponents;

    function loadComponents(app) {
        loadConfigs(app);
        loadControllers(app);
    }

    function loadConfigs(app) {
        var context = require.context('../configs', false, /config.js/);
        context.keys().forEach(function(item) {
            context(item)(app);
        });
    }

    function loadControllers(app) {
        var context = require.context('../controllers', false, /controller.js/);
        context.keys().forEach(function(item) {
            context(item)(app);
        });
    }

    function loadModules() {
        var modules = [];

        var context = require.context(ROOT + '/src/modules', true, /app.routing.js/);
        context.keys().forEach(function(item) {
            var currentModule = context(item);
            modules.push(currentModule.name);
        });

        return modules;
    }
}
