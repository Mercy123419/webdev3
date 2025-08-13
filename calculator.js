const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input
}

function clearDisplay (){
display.value = ""
}

function calculate (){
try{
    display.value = eval(display.value)
}
catch(error){
    display.value = "Error"
}

}
function deleteLastDigit() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function addMinus() {
  let display = document.getElementById("display");
  display.value = "-" + display.value;
}

function percentage() {
  let display = document.getElementById("display");
  display.value = parseFloat(display.value) / 100;
}