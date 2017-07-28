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

$(".new-tweed-text").on("input", function(event) { 

 	var userInput = $(".new-tweed-text").val();  
 	var trimmedInput = userInput.substring(0, 10);
	$(".new-tweed-text").val(trimmedInput);
 
 	var remaingChars = 10 - trimmedInput.length;
 	$(".remaining-amt").html(remaingChars);


});

$(".navigation-icon").click(function(){
	var navi = $(".navigation"); 
	navi.toggleClass("navigation-enabled"); 

});