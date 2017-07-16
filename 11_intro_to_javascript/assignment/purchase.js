var thePrice = parseInt( prompt("How much is the product you are looking to buy?") );

if(isNaN(thePrice))
{
alert("Price input must be numbers only! Please remove ''$'' from your answer.");
var thePrice = parseInt( prompt("How much is the product you are looking to buy?") );

}

var inventoryAmt = parseInt( prompt("How many products in inventory?") );

var moneyYougot = parseInt( prompt("How much money have you got?") );

if(isNaN(thePrice))
{
alert("Price input must be numbers only! Please remove ''$'' from your answer.");
var moneyYougot = parseInt( prompt("How much money have you got?") );

}

var howMany = parseInt( prompt("How many items do you wish to buy?"));

var inStock = inventoryAmt > 0;



if (thePrice*howMany <= moneyYougot && inStock ){

	console.log("purchase!");
}else{

	console.log("do not purchase!");
}

