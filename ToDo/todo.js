
var todoItems = [];

//get input data
var getFormData = function() {
	var data = {};
	data.name = $("#todo-input-name").val();
	data.description = $("#todo-input-description").val();
	return data;
}; 

//get the values and assign value empty string
var clearForm = function () {
	$("#todo-input-name").val("");
	$("#todo-input-description").val("");	
};

//add item to todoItems list
var addItem = function() {
	var item = getFormData();
	todoItems.push(item);
};

var clearHtmlElements = function () {
	$("#list-sub").empty();
};

var markItemCompleted = function (item, completed) {
	item.completed = completed;
};

var refreshList = function () {
	clearHtmlElements();
	$.each(todoItems, function (i, item) {
		var $list = $("<ul />"); //create ul
		var $listItem = $("<li />") //create li
		var $checkBox = $("<input type='checkbox'>").change(function() {
			markItemCompleted(item, this.checked);

		});
		var $remove = $("<a href=''></a>").text("X").click(function (e) {
			e.preventDefault();
			todoItems.splice(i, 1);
			refreshList();
		});	
		$listItem.append($checkbox);
		$listItem.append(item.name); 
		$listItem.append($remove);
		$listItem.appendTo($list);
		$("#list-sub").append($list);
	});
};

//when the document is ready, 
//upon submit, add items from form
$(document).ready(function () {
	$("#todo-form").submit(function (e) {
		e.preventDefault(); //prevents the form from submitting itself.
		addItem();
		clearForm();
		refreshList();	
	});
});

