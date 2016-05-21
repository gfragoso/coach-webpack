'use strict';

function UpperCaseFilter() {
    return function(entry) {

        if (entry) entry = entry.toUpperCase();

        return entry;
    };
}

module.exports = function(app) {
    app.filter('upper', UpperCaseFilter);
};
