console.log("Loaded bro");

var checkingBalance = 0;
var savingsBalance = 0;

var depositChecking = function(amount) {
  // add the amount to the checking balance
   checkingBalance = checkingBalance + amount;

  // show the checking balance
 showChecking();
};

var withdrawChecking = function(amount) {
  if(checkingBalance >= amount) {    
   checkingBalance = checkingBalance - amount;  
 }
  showChecking();

};

var depositSavings = function(amount) {
  // add the amount to the savings balance
  savingsBalance = savingsBalance + amount;

  // show the savings balance
  showSavings();
};

var withdrawSavings = function(amount) {
    // subtract the amount from the savings balance
  if(savingsBalance >= amount) {    
   savingsBalance = savingsBalance - amount;  
 }
  // show the savings balance
    showSavings();
};

var showChecking = function() {
  $("#checking .balance h1").text(checkingBalance);
};

var showSavings = function() {
  $("#savings .balance h1").text(savingsBalance);
};

showChecking();
showSavings();

// ================ EVENTS ================== //

// When I click the Checking Deposit button...
$("#checking .deposit").click(function(){
  var getValue = $(".amount").val();
  var makeIntg = parseInt(getValue); 
  depositChecking(makeIntg);

});

// When I click the Checking Withdraw button...

// When I click the Savings Deposit button...
$("#savings .deposit").click(function(){
  var getValue = $(".amount").val();
  var makeIntg = parseInt(getValue); 
  depositSavings(makeIntg);

});
// When I click the Savings Withdraw button...
