'use strict';

function Routing($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('app/modules');

    $stateProvider.state('app', {
        abstract: true,
        url: '/app',
        template: require('../../templates/layout.template.html')
    });

    $stateProvider.state('app.modules', {
        url: '/modules',
        views: {
            container: {
                controller: 'ModulesController as vm',
                template: require('../../templates/modules.template.html')
            }
        }
    });
}

module.exports = function(app) {
    app.config(Routing);
};
