const express = require('express');
const Router = express.Router();
const controls = require('../controller/controller');

Router.get('/', controls.getData);
Router.post('/post', controls.saveData);
Router.put('/update/:id', controls.updateData);
Router.delete('/delete/:id', controls.deleteData);

module.exports = Router;