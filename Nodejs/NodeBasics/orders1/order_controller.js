
var Orders = require('./orders.js')

var OrderController = {

	// Create POST
	// =============
	new: function(req, res) 
	{
		res.render('orders_new');
	},

	create: function(req, res) 
	{
		var orderId = Orders.addOrder(req.body);
		console.log('New order id: ' + orderId);
		res.redirect('orders/' + orderId);
	},

	// Read GET
	// =============
	index: function(req, res) 
	{
		var orders = Orders.getAllOrders();
		res.render('orders', {
			orders: orders 
		});
	},

	show: function(req, res) 
	{
		var order = Orders.getOrder(req.params.id);
		res.render('orders_show', {
			id: req.params.id,
			order: order
		});
	},

	// Update PUT/PATCH
	// ================
	edit: function(req, res) 
	{
		var order = Orders.getOrder(req.params.id);
		res.render('orders_edit', {
			id: req.params.id,
			order: order
		});
	},

	update: function(req, res) {
		Orders.updateOrder(req.params.id, req.body);
		res.redirect('/orders/' + req.params.id);
	},

	// Delete DELETE
	// =============
	delete: function(req, res) 
	{
		Orders.deleteOrder(req.params.id);
		res.redirect('/orders');
	}

};
module.exports = OrderController;
