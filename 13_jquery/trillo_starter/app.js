
var items = [
  "Wash the car",
  "Wrap things in ca$h",
  "Write blog post about selfies"
];



function addItem(){
	var newItem = document.getElementById("new-item-text").value;
	items.push(newItem);
	document.getElementById("new-item-text").value = "";
	
}


$( document ).ready(function() {


	// Render Starting items

	var renderAllItems = function(itemsToRender) {	
		for(var i = 0; i < items.length; i++) {
	 		 $("<li class='item todo'> <p>" + items[i] + "</p><span class='label'>Mark as Done</span></li>").appendTo("#todo-column .item-list");
			}
	};	

	// Render new items

	var addNewItem = function(item) {
		
	 		$("<li class='item todo'> <p>" + items[ items.length - 1] + "</p><span class='label'>Mark as Done</span></li>").prependTo("#todo-column .item-list");
		
		};

	renderAllItems();


	// Add New Item

	$("#new-item-button").click(function(){

		addNewItem();
	});
});





// Should build the following HTML structure for a done item:
// <li class="item done">
// 	<p>Learn JavaScript</p>
// 	<span class="label">Remove</span>
// </li>












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

