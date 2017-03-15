$(document).ready(function(){
	$("form").submit(function(){
	event.preventDefault();
		var userInput = $("input").val();

		if(userInput.length != 0){

			$("input").css("background-color","#e782a4");

			$("input").blur(function(){
				$('input').css("background-color","inherit");
			});

		}else{
			$("form input[placeholder]").attr("placeholder", "type here");

			$("form input").blur( function(){
				$("form input[placeholder]").attr("placeholder", "search...");
			});
		}

	});//submit end

});//jquery end

