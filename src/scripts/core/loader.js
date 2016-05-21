'use strict';

function Loader() {}

Loader.loadComponents = function(app) {
    Loader.loadConfigs(app);
    Loader.loadFilters(app);
    Loader.loadControllers(app);
}

Loader.loadFilters = function(app) {
    var context = require.context('../filters', false, /filter.js/);
    Loader.requireContext(context, app);
};

Loader.loadConfigs = function(app) {
    var context = require.context('../configs', false, /config.js/);
    Loader.requireContext(context, app);
}

Loader.loadControllers = function(app) {
    var context = require.context('../controllers', false, /controller.js/);
    Loader.requireContext(context, app);
}

Loader.loadModules = function() {
    var modules = [];
    var context = require.context(PROCESS_CWD + '/src/modules', true, /app.routing.js/);
    context.keys().forEach(function(item) {
        var currentModule = context(item);
        modules.push(currentModule.name);
    });
    return modules;
}

Loader.requireContext = function(context, app) {
    context.keys().forEach(function(item) {
        context(item)(app);
    });
}

module.exports = Loader;
