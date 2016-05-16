'use strict';

function CompaniesController() {

    var vm = this;
    vm.init = init;

    function init() {
        vm.companies = [{
            name: 'Microsoft',
            address: 'EUA',
        }, {
            name: 'Apple',
            address: 'EUA',
        }];
    }
};

module.exports = function(app) {
    app.controller('CompaniesController', CompaniesController);
};
