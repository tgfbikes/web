var orders = {};

// Create
var addOrder = function (newOrder) {
	var id = new Date().valueOf();
	orders[id] = newOrder;
	return id;
};


// Read
var getAllOrders = function () {
	return JSON.parse(JSON.stringify(orders));
};

var getOrder = function (id) {
	return orders[id];
};


// Update
var updateOrder = function (id, updateOrder) {
	orders[id] = updateOrder;
	return updateOrder;
};


// Delete
var deleteOrder = function (id) {
	delete orders[id];
};

module.exports = {
	addOrder: addOrder,
	getOrder: getOrder,
	updateOrder: updateOrder,
	deleteOrder: deleteOrder,
	getAllOrders: getAllOrders
};
