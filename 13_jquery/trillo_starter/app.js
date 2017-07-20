//definitly did this all wrong but it seems to be working somewhat



var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];

var done = [
  
];





function addItem(){
 
	//get input value
	var newItem = document.getElementById("new-item-text").value;
	
	//add to array
	items.push(newItem);

	//reset input
	document.getElementById("new-item-text").value = "";
	
}



$( document ).ready(function() {

	// Render Starting items
	var renderAllItems = function(itemsToRender) {	
		for(var i = 0; i < items.length-1; i++) {
	 		 $("<li class='item todo' id='label"+ items.indexOf(items[i]) +"'> <p>" + items[i] + "</p><span class='label' id='label"+ items.indexOf(items[i]) +"'>Mark as Done</span></li>").appendTo("#todo-column .item-list");

			}
		addNewItem();
		
	};



	// Render new items
	var addNewItem = function(newItem) {
		
			 
			 
		//create the li for the new todo item
		$("<li class='item todo' id='label"+ items.indexOf(items[items.length - 1]) +"'> <p>" + items[ items.length - 1] + "</p><span class='label' id='label"+ items.indexOf(items[items.length - 1]) +"'>Mark as Done</span></li>").prependTo("#todo-column .item-list");
		
		
		//click funtion for Mark as done
		$(".todo .label").click(function(){
			//find the id of the span being clicked
			var itemId = $(this).attr("id");
			//create a string that adds the id to locate the paragraph of the list item
			var addLi = "li#" + itemId + " p" ;
			//create a string that adds the id to target the list item
			var doneClass = "#" +itemId + ".todo"
			//get paragraph text from list item
			var getItem = $(addLi).html();
			//get the array index number of todo item
			var findInArray = items.indexOf(getItem);
			
			//remove item from todo list
			$(doneClass).remove();
			//add item to the done list
			done.push(getItem);
			$("<li class='item done' id='done" + done.length + "'> <p>" + getItem + "</p><span class='label donezo' id='done" + done.length + "'>Remove</span></li>").prependTo("#done-column .item-list");
			//find the id of the span being clicked
			var itemId = $(this).attr("id");
			var doneClass = "#" +itemId + ".done"
			//get paragraph text from list item
			$(doneClass).remove();
			
			
			
			$(".donezo").click(function(){
				var doneId = $(".donezo").attr("id");
				var doneItem = "#" +doneId + ".done"
				
				$(doneItem).remove();
			
			});
			
			//remove item from array so that as new one are being created and removed there are no errors causing doubling 
			items.remove(findInArray);
			
		});
		
		

	};
	
		
	// Remove Item
	var removeItem = function() {
		
	};	
	renderAllItems();


	// Add New Item

	$("#new-item-button").click(function(){

		addNewItem();
	});
	
	// Mark Item as Done

	

});




// Move all items from "Todo" to "Done"

var completeAll = function() {

};

// Remove all items from "Done"

var clearAll = function() {

};








// ----------------
// BONUS
// ----------------

// What does .eq() do?

// Remove a single item

var removeItem = function(itemNumber) {};

// Mark a single item as Done

var markAsDone = function(itemNumber) {};
