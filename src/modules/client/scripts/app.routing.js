'use strict';

function ClientRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('client', {
            url: '/client',
            abstract: true,
            template: require(PROCESS_CWD + '/src/templates/layout.template.html'),
            resolve: {
                loadModule: function($q, $ocLazyLoad) {
                    return $q(function(resolve) {
                        require.ensure([], function(require) {
                            var module = require('./app');
                            $ocLazyLoad.load({ name: module.name });
                            resolve(module);
                        }, 'client');
                    })
                }
            }
        })
        .state('client.clients', {
            url: '/clients',
            displayName: 'grid de clientes',
            views: {
                container: {
                    controller: 'ClientsController as vm',
                    templateProvider: function($q) {
                        return $q(function(resolve) {
                            require.ensure([], function(require) {
                                var template = require('../templates/clients.template.html');
                                resolve(template);
                            }, 'client');
                        });
                    }
                }
            }
        });
}

module.exports =
    angular.module('client.routing', [])
    .config(ClientRouting);
