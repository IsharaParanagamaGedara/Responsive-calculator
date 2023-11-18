let display = document.getElementById("display");
let currentValue = "0";

function appendToDisplay(value) {
    if (currentValue === "0" && value !== ".") {
        currentValue = value;
    } else {
        currentValue += value;
    }
    display.textContent = currentValue;
}

function clearDisplay() {
    currentValue = "0";
    display.textContent = currentValue;
}

function backspace() {
    currentValue = currentValue.slice(0, -1);
    if (currentValue === "") {
        currentValue = "0";
    }
    display.textContent = currentValue;
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        display.textContent = currentValue;
    } catch (error) {
        currentValue = "Error";
        display.textContent = currentValue;
    }
}

function calculateSquareRoot() {
    try {
        currentValue = Math.sqrt(eval(currentValue)).toString();
        display.textContent = currentValue;
    } catch (error) {
        currentValue = "Error";
        display.textContent = currentValue;
    }
}

function calculatePercentage() {
    try {
        currentValue = (eval(currentValue) / 100).toString();
        display.textContent = currentValue;
    } catch (error) {
        currentValue = "Error";
        display.textContent = currentValue;
    }
}
