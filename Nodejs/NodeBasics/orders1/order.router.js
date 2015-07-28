
var express = require('express');

var OrderController = require('./order_controller.js');

// Middleware
var router = express.Router();


// Create POST
// ===========
router.get('/new', OrderController.new);
router.post('/', OrderController.create); 

// Read GET
// ========
router.get('/', OrderController.index); 
router.get('/:id', OrderController.show); 

// Update PUT/PATCH
// ================
router.get('/:id/edit', OrderController.edit); 
router.put('/:id', OrderController.update);

// Delete DELETE
// =============
router.delete('/:id', OrderController.delete); 

module.exports = routers;
