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

            valueA = values[0];
            valueB = values[1];
            operator = operators[0];
            

            console.log(values);
            console.log(operators);
            console.log(valueA);
        }

        if (pressedButton.value == "clear") {
            displayBar.value = "";
        }



        
    })
})