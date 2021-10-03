var display = document.getElementById("calculatorDisplay");
var lastDisplayElement = "not a number";

function displayUpdate(buttonContent)
{
    if (display.value == "Infinity"){
        displayClear(); //Clears display after division by zero
    }
    if (isNaN(lastDisplayElement) && isNaN(buttonContent))
    {
        return; //Ensures that two non numbers cannot be entered in a row
    }
    display.value = display.value + buttonContent + ""; // +"" ensures that display.value is always a string
    lastDisplayElement = display.value[display.value.length-1];
}

function displayClear()
{
    display.value = "";
    lastDisplayElement = "not a number";
}

function calculate()
{
    if (display.value == "")
    {
        return;
    }
    result = Function("return " + display.value)();
    display.value = result + ""; // +"" ensures that display.value is always a string
}