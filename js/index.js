//function universe() {
  const display = document.querySelector(".display");

  //var memoryStore;
  var currentOperation;
  var cloudValue;
  var displayImage;
  //var newValue;

  document.querySelector(".clear").addEventListener("click", clearDisplay);

  function clearDisplay() {
    cloudValue = "";
    display.value = "";
    currentOperation = "";
    displayImage = "";
  }

  document.querySelectorAll(".digits button").forEach(button => button.addEventListener("click", digitPressed));

  function digitPressed(ev) {
    //console.log(ev.target.innerText);
    //display.value = ev.target.innerText;
    display.value += ev.target.innerText;
    cloudValue = display.value;
    }

  document.querySelectorAll(".opers button").forEach(button => button.addEventListener("click", opersPressed));

  function opersPressed(ev) {
    
    //currentOperation = ev.target.innerText;
    //if (currentOperation != ev.target.innerText) {
    currentOperation = ev.target.innerText;
    display.value = cloudValue + currentOperation;
    //displayImage = display.value;
    //display.value += ev.target.innerText;
    
  }

  document.querySelector(".equal").addEventListener("click", calculus);

  function calculus() { 
    //   if (displayImage.charAt(-1) === currentOperation) { 
    //     display.value = "finished with operator";
    //    } else {
    //     display.value = eval(displayImage);
    //    }  
    displayImage = display.value;
    if (displayImage.charAt(-1) === '+') {
        display.value = 'hello';
       } else {
        display.value = eval(display.value);
        cloudValue = display.value;
              }
    }
      
//   document.querySelector(".memplus").addEventListener("click", memAdd);

//   function memAdd() {
//     //display.value += ev.target.innerText;
//     memoryStore = memoryStore + parseInt(display.value);
//   }

  //document.querySelector(".memdeduct").addEventListener("click", memSubstract);

//   function memSubstract() {
//     memoryStore = memoryStore - parseInt(display.value);
//   }

//   document.querySelector(".memdisplay").addEventListener("click", memShow);

//   function memShow() {
//     display.value = memoryStore.toString();
//   }

//   document.querySelector(".memclear").addEventListener("click", memClean);

//   function memClean() {
//     memoryStore = 0;
//   }
//}
