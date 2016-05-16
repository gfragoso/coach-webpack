'use strict';

function ClientsController() {

    var vm = this;
    vm.init = init;

    function init() {
        vm.clients = [{
            company: 'Microsoft',
            contactName: 'Bill Gates',
            email: 'bill@microsoft.com',
            phone: null
        }, {
            company: 'Apple',
            contactName: 'Steve Jobs',
            email: 'jobs@apple.com',
            phone: null
        }]
    }
};

module.exports = function(app) {
    app.controller('ClientsController', ClientsController);
};
