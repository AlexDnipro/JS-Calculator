const display = document.querySelector('.display');

let memoryStore = 0;

document.querySelector('.clear').addEventListener('click', clearDisplay);

function clearDisplay () {
    display.value = "";
}

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
   //display.value = ""; // Trying to clear screen after working with M+
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener("click", result);

function result() {
    display.value = eval(display.value);
}

document.querySelector('.memplus').addEventListener("click", memAdd);

function memAdd() {
    //display.value += ev.target.innerText;
    memoryStore = memoryStore + parseInt(display.value);
}

document.querySelector('.memdeduct').addEventListener("click", memSubstract);

function memSubstract() {
    memoryStore = memoryStore - parseInt(display.value);
}

document.querySelector('.memdisplay').addEventListener("click", memShow);

function memShow() {
    display.value = memoryStore.toString();
}

document.querySelector('.memclear').addEventListener("click", memClean);

function memClean() {
    memoryStore = 0;
}

