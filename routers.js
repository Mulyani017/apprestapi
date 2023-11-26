'use strict';

module.exports = function(app) {
    var jsonku = requiret('./controller');

    app.router('/')
    .get(jsounku.index);
}