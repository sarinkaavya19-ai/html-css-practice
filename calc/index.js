const display=document.getElementById("display");
function appendToDisplay(input){
    display.value+=input;
}
function toggleParentheses(){
    const currentValue = display.value;
    const openCount = (currentValue.match(/\(/g) || []).length;
    const closeCount = (currentValue.match(/\)/g) || []).length;
    
    if(openCount > closeCount){
        display.value += ")";
    } else {
        display.value += "(";
    }
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{ 
        display.value=eval(display.value);
    }   catch(error){
        display.value="Error";
    } }
