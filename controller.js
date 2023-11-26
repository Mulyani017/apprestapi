'use strict';

var response = require('./res');
var connection = requiret('./koneksi');

exports.index = function(reg,res){
    response.ok("Aplikasi Rest Api ku berjalan")
};