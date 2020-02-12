  (function universe() { //Parent function to contain our global variables;
  const display = document.querySelector(".display");

  var currentOperation; //Stores the last operation button that we pressed
  var displayImage = ""; //Our virtual calculation environment is initialized with empty string


  document.querySelector(".clear").addEventListener("click", clearDisplay);

  function clearDisplay() { //Clear button function - cleans client display and all auxilary variables
    display.value = "";
    currentOperation = "";
    displayImage = "";
  }

  document.querySelectorAll(".digits button").forEach(button => button.addEventListener("click", digitPressed));

  function digitPressed(ev) { //Function that works with digit buttons
    currentOperation = ""; //Every time we click on digit we don't need to remember current operation
    if (displayImage === "" && ev.target.innerText === ".") { //When we try to press "." with empty calculator it will return "0."
        display.value = "0.";
        displayImage = display.value;
    } else if ( display.value.slice(-1) === "." && ev.target.innerText === "." ) { //This will block input of repeating float signs
        display.value = displayImage;
    } else if (displayImage == "0" && ev.target.innerText != ".") {
        display.value = displayImage;
    } else {
        display.value = displayImage + ev.target.innerText;
        displayImage = display.value;
        }
    
    }

  document.querySelectorAll(".opers button").forEach(button => button.addEventListener("click", opersPressed));

  function opersPressed(ev) { //Function that works with operation buttons
    if (display.value === "") {
        currentOperation = ev.target.innerText;
        display.value = displayImage;
    } else if (currentOperation != "") {//If we click on operation button more then once we do nothing until we hit digits or equal.
        display.value = displayImage;
    } else {
        currentOperation = ev.target.innerText;
        display.value = display.value + currentOperation;
        displayImage = display.value;
    }
  

}

  document.querySelector(".equal").addEventListener("click", calculus);

  function calculus() {
    displayImage = display.value;
    if (display.value.slice(-1) === currentOperation) { //If we have unfinished operation as for example "n+" in the display
        displayImage = displayImage + displayImage.slice(0, displayImage.length - 1); //it will automatically add "n" to it and return "n+n".
        display.value = eval(displayImage); // I could convert to numbers but I decided to experiment with eval.
        displayImage = "";
        currentOperation = "";
        
    } else {
        display.value = eval(displayImage);
        displayImage = ""; //Clean our virtual calculation environment after calculus function called.
        currentOperation = "";   
    } 
}
      
})();
