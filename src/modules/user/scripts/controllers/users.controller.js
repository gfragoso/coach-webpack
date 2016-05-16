'use strict';

function UsersController() {

    var vm = this;
    vm.init = init;

    function init() {
        vm.users = [{
            name: 'José',
            email: 'jose@email.com',
            phone: '11 98879-0011'
        }, {
            name: 'João',
            email: 'joao@email.com',
            phone: '11 45879-0011'
        }]
    }
};

module.exports = function(app) {
    app.controller('UsersController', UsersController);
};
