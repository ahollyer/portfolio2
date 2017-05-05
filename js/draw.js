// DRAWING TOOLS
function drawGrid(){
	for (var i = 0; i < gridSize * gridSize; i++) {
		$("#canvas").append('<div class="box outline"></div>');
	}
	$(".box").css({
		'width': $('#canvas').width() / gridSize,
		'height': $('#canvas').height() / gridSize
	});
}

function marker() {
	$(".box").mouseenter(function(){
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
		var rainbowPaint = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$(this).css("background", rainbowPaint);
	});
}

$(document).ready(function() {
  $(".hide").hide();

  $(window).resize( $.throttle( 350, function(){
    $('#canvas').empty();
    drawGrid();
    marker();
  }));

  // Pretty rainbow text
  $("h2").mouseenter( $.debounce( 250, function(){
    $(".show").hide();
    $(".hide").fadeIn();
  }));

  // CANVAS FUNCTIONS
	gridSize = 30;

	drawGrid();

	marker();

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
	$('[name="change"]').click(function(){
		gridSize = prompt("Please enter a number from 2-40 to change the SketchPad's grid size. For example, '16' generates a 16x16 grid.", "16");
		$('#canvas').empty();
		drawGrid();
		marker();
	});
	$('[name="toggle"]').click(function() {
		$(".box").toggleClass("outline");
	});
});
