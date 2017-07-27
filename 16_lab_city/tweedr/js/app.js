var inputText = $(".new-tweed-text").val();


var newTweed = function(item){
	var myTweed = $("<div class='tweed'>");
	var addClose = $("<span>");
	var addText = $("<p>");

	addClose.html("&times;");
	addText.html(item);

	myTweed.append(addText).append(addClose);
	$(".tweeds").append(myTweed);

}



$(".new-tweed-button").click(function(){
	var inputText = $(".new-tweed-text").val();

	 if(inputText){

  		newTweed(inputText);
  		$(".new-tweed-text").val() = "";
	};

});

$(".new-tweed-text").keypress(function(event) { 
 	var userInput = $(".new-tweed-text").val();  
 	if (userInput.length > 5) {    
 		event.preventDefault();  
 	} 
});

$(".navigation-icon").click(function(){
	console.log("working");

	if( $(".navigation").hasClass("navigation-enabled") ){
	 $(".navigation").removeClass("navigation-enabled")
	}else{	
		$(".navigation").addClass("navigation-enabled")
	}
	

});