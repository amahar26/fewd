var NY = ["yew york city", "nyc", "new york"];
var nybg = "url(./images/nyc.jpg) no-repeat center center fixed";

var SYD = ["sydney","syd"];
var sybg = "url(./images/sydney.jpg) no-repeat center center fixed";

var LAX = ["los angeles", "la", "lax"];
var labg = "url(./images/la.jpg) no-repeat center center fixed";

var SF = ["the bay area", "san francisco", "sf"];
var sfbg = "url(./images/sf.jpg) no-repeat center center fixed";	

var AUS = ["austin", "atx"]
var aubg = "url(./images/austin.jpg) no-repeat center center fixed";

var changeBg = function(inputLC){
	

	if(jQuery.inArray(inputLC, NY) !== -1){
		$("body").css( "background", nybg );
	}else if(jQuery.inArray(inputLC, SYD) !== -1){
		$("body").css( "background", sybg );
	}else if(jQuery.inArray(inputLC, LAX) !== -1){
		$("body").css( "background", labg );
	}else if(jQuery.inArray(inputLC, SF) !== -1){
		$("body").css( "background", sfbg );
	}else if (jQuery.inArray(inputLC, AUS) !== -1){
		$("body").css( "background", aubg );
	};

};


//add click event to the submit button that also accepts keystroke submit
	$("form").submit(function(event) { 
	 	event.preventDefault();  
		var userInput = $("#city-type").val();  
		var inputLC = userInput.toLowerCase();
		changeBg(inputLC);
		$("#city-type").val("");
 	 });


