'use strict';

function UserRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('user', {
            url: '/user',
            abstract: true,
            template: require(ROOT + '/src/templates/layout.template.html'),
            resolve: {
                loadModule: function($q, $ocLazyLoad) {
                    return $q(function(resolve) {
                        require.ensure([], function(require) {
                            var module = require('./app');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module);
                        }, 'user');
                    })
                }
            }
        })
        .state('user.users', {
            url: '/users',
            displayName: 'grid de usuários',
            views: {
                container: {
                    controller: 'UsersController as vm',
                    templateProvider: function($q) {
                        return $q(function(resolve) {
                            require.ensure([], function(require) {
                                var template = require('../templates/users.template.html');
                                resolve(template);
                            }, 'user');
                        });
                    }
                }
            }
        });

}

module.exports =
    angular.module('users.routing', [])
    .config(UserRouting);
