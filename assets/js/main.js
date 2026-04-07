const displayBar = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
let valueA = 0;
let valueB = 0;
let operator = "";

buttons.forEach(function(pressedButton) {
    pressedButton.addEventListener("click", function(event) {        
        if (pressedButton.value == "=" && displayBar.value == "") {
            displayBar.value = "Erro!";
        } else if (pressedButton.value != "=") {
            displayBar.value += pressedButton.value;
        } else {
            let display = displayBar.value;
            let values = display.split(/[\+\-\*\/]/);
            let operators = display.match(/[\+\-\*\/]/g)

            valueA = parseInt(values[0]);
            valueB = parseInt(values[1]);
            operator = operators[0];

            calculatorApi.calculate(valueA, operator, valueB)
                .then(result => displayBar.value = result);
        }

        if (pressedButton.value == "clear") {
            displayBar.value = "";
        }        
    })
})