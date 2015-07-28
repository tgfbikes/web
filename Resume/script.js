/*
 * This will fade div into full opacity when hovered over,
 * then back to half opacity when mouse not hovering.

			$(document).ready(function(){
				$('div').mouseenter(function() {
					$('div').fadeTo('fast', 1.0);
				});
				$('div').mouseleave(function() {
					$('div').fadeTo('slow', 0.5);
				});
			});


 * Variables are in this fashion:
 * 		var $foo = 7;
 * 		var $bar = $(ul ol li:nth-child(3))
 
 
 * This function will fade in a div
 * CSS display:none
 
			$(document).ready(function() {
				$('div').fadeIn('slow');
			});;

 * The 'this' keyword refers to the object.
 * For example, this code will not affect all the divs
 * on the page but rather to only the div clicked.
 
			$(document).ready(function() {
				$('div').click(function() {
					$(this).fadeOut('slow');
				});
			});


 * The css for the class panel had display:none, once 
 * the div class pull-me is clicked div class panel comes
 * into view.

			$(document).ready(function() {
				$('.pull-me').click(function() {
					$('.panel').slideToggle('slow');
				});
			});





*/
	
