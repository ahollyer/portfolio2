// DRAWING TOOLS
var gridSize = 30;

function drawGrid(){
	for (var i = 0; i < gridSize * gridSize; i++) {
		$(".canvas").append("<div class='box'></div>");
	}
	$(".box").css({
		"width": $(".canvas").width() / gridSize,
		"height": $(".canvas").height() / gridSize
	});
}

function marker() {
	$(".box").on("mouseenter touchstart", function(){
		$(this).css("background-color", "#b2b2b2");
	});
}

function eraser() {
	$(".box").mouseenter(function(){
		$(this).css("background-color", "#FFF");
	});
}

function rainbow() {
	$(".box").mouseenter(function(){
		// just pretty colors
		var prettyRainbow = ["#F44336", "#f2f", "#22f", "#2ff", "#2f2", "#ff2", "#E91E63", "#9C27B0", "#673AB7", "#2196F3", "#00E676", "#FFEB3B", "#FF9800", "#FF5722", "#00BCD4", "#FF4081"];
		// full color range
		// var rainbowPaint = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background", prettyRainbow[Math.floor(Math.random() * prettyRainbow.length)]);
	});
}


$(document).ready(function() {
	var title = $("h1")[0].outerHTML;
  // CANVAS FUNCTIONS
	$(window).resize( $.throttle(350, function(){
		$(".canvas").empty();
		drawGrid();
		rainbow();
		$(".title").remove();
		$("body").append(title);
	}));

	drawGrid();
	rainbow();

	$('[name="clear"]').click(function(){
		$(".box").css("background-color", "#FFF");
	});
	$('[name="eraser"]').click(function(){
		eraser();
	});
	$('[name="marker"]').click(function(){
		marker();
	});
	$('[name="rainbow"]').click(function(){
		rainbow();
	});
	// $('[name="change"]').click(function(){
	// 	gridSize = prompt("Please enter a number from 2-40 to change the sketchpad's grid size. For example, '16' generates a 16x16 grid.", "16");
	// 	$('#canvas').empty();
	// 	drawGrid();
	// 	rainbow();
	// });
	$('[name="toggle"]').click(function() {
		$(".box").toggleClass("outline");
	});

});
