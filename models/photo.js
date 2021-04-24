'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = Schema ({
    file: String
});

module.exports = mongoose.model('Photo', PhotoSchema);