

function generateNumber() {
  // generate a random integer(hint : Math.random)
  let numb = document.getElementById("number")
  
    let p = Math.floor(Math.random()*100)
    numb.textContent = p
   
   checkOddEven(p)


  
}


function checkOddEven(num) {
  // logic for even / odd
 
  let output = document.getElementById("odd-even")
  if(num%2==0){
   output.textContent = "The number is even"
  }else{
   output.textContent = "The number is odd"
  }
}
let generatenumber = document.getElementById("generate-number")
window.onload = function () {

  // add event listeners to the button here
  generatenumber.addEventListener('click', function(){
    
    generateNumber()
  })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
