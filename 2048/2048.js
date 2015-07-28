
var size = 4;

var board = {};



var tileKey = function (col, row) {
	return "tile" + col + "-" + row;
};

var getNumbersInRow = function(row) {
	var numbers = [];
	for (var col = 0; col < size; col++) {
		var key = tileKey(col, row);
		var val = board[key];
		if (val) {
			numbers.push(val);
		}
	}
	return numbers;
};

var getNumbersInCol = function(col) {
	var numbers = [];
	for (var row = 0; row < size; row++) {
		var key = tileKey(col, row);
		var val = board[key];
		if (val) {
			numbers.push(val);
		}
	}
	return numbers;
};

var createBoard = function () {
	var $board = $("#board");
	for (var row = 0; row < size; row++) {
		var $row = $("<div></div>").addClass("row");
		for(var col = 0; col < size; col++) { 
			var $tile = $("<div></div>").addClass("tile");
			$tile.attr("id", tileKey(col, row)); //gives id attribute
			$row.append($tile);
		}
		$board.append($row);
	}
};

var refreshBoard = function () {
	for (var row = 0; row < size; row++) {
		for(var col = 0; col < size; col++) {
			var key = tileKey(col, row);
			var val = board[key];
			var $tile = $("#" + key);
			$tile.removeClass().addClass("tile").text('');
			$tile.text(val).addClass("tile-" + val);	
		}
	}
};

var combineNumbers = function (numbers) {
  var newNumbers = [];

  while (numbers.length > 0) {
    if (numbers[0] === numbers[1]) {
      // add the first two numbers together
      var sum = numbers[0] + numbers[1];
      // push the sum onto newNumbers array
      newNumbers.push(sum);
      // remove BOTH numbers from numbers array
      numbers.shift();
      numbers.shift();
    } else {
      // push the first number onto newNumbers array
      newNumbers.push(numbers[0]);
      // remove the first number from numbers array
      numbers.shift();
    }
  }
  return newNumbers;
 };

 var combineRowLeft = function (row) {
	var oldNumbers = getNumbersInRow(row);
	var newNumbers = combineNumbers(oldNumbers);
	setNumbersInRow(row, newNumbers);
 }

 var combineColUp = function (col) {
	var oldNumbers = getNumbersInCol(col);
	var newNumbers = combineNumbers(oldNumbers);
	setNumbersInCol(col, newNumbers);
 }

 var combineRowRight = function (row) {
 	var oldNumbers = getNumbersInRow(row);
 	oldNumbers.reverse();
 	var newNumbers = combineNumbers(oldNumbers);
 	for (var i = newNumbers.length; i < size; i++) {
 		newNumbers.push(undefined);
 	}
 	newNumbers.reverse();
 	setNumbersInRow(row, newNumbers);
 }

 var combineRowDown = function (col) {
 	var oldNumbers = getNumbersInCol(col);
 	oldNumbers.reverse();
 	var newNumbers = combineNumbers(oldNumbers);
 	for (var i = newNumbers.length; i < size; i++) {
 		newNumbers.push(undefined);
 	}
 	newNumbers.reverse();
 	setNumbersInCol(col, newNumbers);
 } 

 var didBoardChange = function (oldboard) {
	for (var row = 0; row < size; row++) {
		for(var col = 0; col < size; col++) {
			var key = tileKey(col, row);
			if (board[key] !== oldboard[key]) {
				return true;
			}
		}
	}
	return false;
 };

var keyPressed = function (direction) {
	var boardCopy = $.extend({}, board);
	for (var n = 0; n < size; n++) {
		if (direction == "left") {
			combineRowLeft(n);
		} else if (direction == "up" ) {
			combineColUp(n);
		} else if (direction == "right") {
			combineRowRight(n);
		} else if (direction == "down") {
			combineRowDown(n);
		}
	}
	if (didBoardChange(boardCopy)) {
		addRandomTile();
		refreshBoard();
		if (checkGameOver()) {
			$("<div></div>").appendTo("#board").text("Game Over").addClass("gameover").hide().fadeIn();	
		}
	}
};

var setNumbersInRow = function(row, newNumbers) {
	for (var col = 0; col < size; col++) {
		var key = tileKey(col, row);
		board[key] = newNumbers[col];
	}
};

var setNumbersInCol = function(col, newNumbers) {
	for (var row = 0; row < size; row++) {
		var key = tileKey(col, row);
		board[key] = newNumbers[row];
	}
};

var getEmptyTiles = function () {
	var empty = []
	for (var row = 0; row < size; row++) {
		for(var col = 0; col < size; col++) { 
			var key = tileKey(col, row);
			if (board[key] == undefined) {
				empty.push(key);
			}
		}
	}
	return empty;
};

var addRandomTile = function () {
	var emptyTiles = getEmptyTiles();
	var randomIndex = Math.floor(Math.random() * emptyTiles.length);
	var randomEmptyTile = emptyTiles[randomIndex];
	var twoOrFour = Math.random() > 0.8 ? 4 : 2; // condition ? then : else
	board[randomEmptyTile] = twoOrFour;	
	$("#" + randomEmptyTile).hide().fadeIn("fast");
};

var checkGameOver = function () {
	//check empty tiles
	var empty = getEmptyTiles();
	if (empty.length > 0) {
		return false;
	}

	//check rows
	for (var row = 0; row < size; row++) {
		var numbers = getNumbersInRow(row);
		for (var n = 0; n < numbers.length - 1; n++) {
			if (numbers[n] == numbers[n + 1]) {
				return false;
			}
		}
	}
	//check columns
	for (var col = 0; col < size; col++) {
		var numbers = getNumbersInCol(col);
		for (var n = 0; n < numbers.length - 1; n++) {
			if (numbers[n] == numbers[n + 1]) {
				return false;
			}
		}
	}
	return true;
};


//excecute when DOM is ready
$( document ).ready(function () {
//create html 4x4 grid
	createBoard();
	addRandomTile();
	addRandomTile();
	refreshBoard();

	$(document).keydown(function(e) {
		switch (e.which) {
			case 37: //left
			case 65: //o
				keyPressed("left");
				break;
			case 38: //up
			case 87: //w
				keyPressed("up");
				break;
			case 39: //right
			case 68: //d
				keyPressed("right");
				break;
			case 40: //down
			case 83: //s
				keyPressed("down");
				break;
		}
	});
});


