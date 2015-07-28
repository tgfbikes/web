(function()
{

	angular.module('todoApp')

		.factory('Item', [
			function()
			{
				///////////////////////////////
				// Collection of Items Stuff //
				///////////////////////////////

				var Item = function(itemIn){
					itemIn = itemIn || {};
					this.id = itemIn.id || new Date().valueOf();
					this.title = itemIn.title || '';
					this.complete = itemIn.complete || false;
				};

				var json = localStorage.getItem('todoApp_Item');
				Item.list = angular.fromJson(json) || {};

				Item.persist = function() {
					var json = angular.toJson(Item.list);
					localStorage.setItem('todoApp_Item', json);
				};

				///////////////////////
				// Single Item Stuff //
				///////////////////////

				var item = Item.prototype;

				item.id = 0;
				item.title = '';
				item.complete = false;

				item.save = function()
				{
					Item.list[this.id] = this;
					Item.persist();
				};

				item.remove = function()
				{
					delete Item.list[this.id];
					Item.persist();
				};

				/////////////////////////
				// Make Item available //
				/////////////////////////
				
				angular.forEach(Item.list, function (item, id) {
					new Item(item).save();
				});

				return Item;
			}
		]);

}).call(this);
