'use strict';

function ModulesController($state) {

    var vm = this;
    vm.init = init;

    function init() {
      vm.states = _.filter($state.get(), function(state) {
          return (!state.abstract) && state != $state.current;
      });
    }
}

module.exports = function(app) {
    app.controller('ModulesController', ModulesController);
}
