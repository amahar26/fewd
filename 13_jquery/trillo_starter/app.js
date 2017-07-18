
var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
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
		$("<li class='item todo' id='label"+ items.indexOf(items[items.length - 1]) +"'> <p>" + items[ items.length - 1] + "</p><span class='label' id='label"+ items.indexOf(items[items.length - 1]) +"'>Mark as Done</span></li>").prependTo("#todo-column .item-list");
		$(".todo .label").click(function(){
			var itemId = $(this).attr("id");
			var addLi = "li#" + itemId + " p" ;
			var doneClass = "#" +itemId + ".todo"
			var getItem = $(addLi).html();

			
				
			$(doneClass).remove();
			$("<li class='item done'> <p>" + getItem + "</p><span class='label'>Remove</span></li>").prependTo("#done-column .item-list");
				
		});
		
	};

	// Render new items

	var moveitem = function(doneClass) {
		
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