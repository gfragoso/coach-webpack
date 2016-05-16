'use strict';

function CompanyRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('company', {
            url: '/company',
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
                        }, 'company');
                    })
                }
            }
        })
        .state('company.companies', {
            url: '/companies',
            displayName: 'grid de empresas',
            views: {
                container: {
                    controller: 'CompaniesController as vm',
                    templateProvider: function($q) {
                        return $q(function(resolve) {
                            require.ensure([], function(require) {
                                var template = require('../templates/companies.template.html');
                                resolve(template);
                            }, 'company');
                        });
                    }
                }
            }
        });

}

module.exports =
    angular.module('company.routing', [])
    .config(CompanyRouting);
