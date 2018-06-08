//	the game will consist of four crystals
// 	in these four crystal each value will be randomly generated from values of 1-12
// 	side note: there will be a win/loss counter 
//	with the game reseting after a win or a loss while keep track of score
//	there will be a randomly generated target score 20-50
//	class = .
//	id = #
//	classes need to be in ""
//	variables dont require quotes


//	global variables
var target_score;
var wins = 0;
var losses = 0;
var counter = 0;

//	reset script (create function to reset counter)
//	to reset attributes of class/id use ".empty()"
 var reset = function(){
	$(".stones").empty();

	var images = [
		'assets/images/reality_gem.png',
		'assets/images/soul_gem.png',
		'assets/images/space_gem.png',
		'assets/images/time_gem.png'
	]
	//	target score script 
	target_score = Math.floor(Math.random() * 30) + 20;
	$("#target_score").html("Try to hit this score! " + target_score);


	//	local variables (four stones)
	for (var i = 0; i < 4; i++){
		
		//	syntax script to create random number
		var rsv = Math.floor(Math.random() * 12) + 1;
			console.log(rsv);


		//	creating link to html stones
		var stone = $("<div>");
			stone.attr({"class": 'stone',
				"rando": rsv

		});
				//	in line css coninside with loop and array
			stone.css({
				"background-image":
				"url('" + images[i] + "')",
				"background-size":"cover"
			});
		
		$(".stones").append(stone);
	}
}

reset();

//	on click function for stones
$(document).on("click", ".stone", function(){

	//	parseInt() is a jQuery method, it changes or parses value into integer

	var stove = parseInt($(this).attr("rando"));
	counter += stove;
		console.log(counter);
	$("#counter").html("Counter: " + counter);
		//	win counter
	 if (counter === target_score){
		wins ++; 
		$("#wins").html("Wins! " + wins);
		counter = 0;
		reset();
	}

	//	losses counter
	else if (counter > target_score){
		losses ++;
		$("#losses").html("You lose! " + losses);
		counter = 0;
		reset();
	}

});


