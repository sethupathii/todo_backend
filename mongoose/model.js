const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: String
})

const model = mongoose.model('Todos', Schema);

module.exports = model;