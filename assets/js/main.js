const displayBar = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const historyList = document.getElementById("history-list");
let valueA = 0;
let valueB = 0;
let operator = "";
let display = "";

buttons.forEach(function (pressedButton) {
    pressedButton.addEventListener("click", function (event) {
        if (pressedButton.value == "=" && displayBar.value == "") {
            displayBar.value = "Erro!";
        } else if (pressedButton.value != "=") {
            if (pressedButton.value.match(/[\+\-\*\/]/)) {
                displayBar.value += ` ${pressedButton.value} `;
            }
            else {
                displayBar.value += pressedButton.value;
            }
        } else {
            display = displayBar.value;
            let values = display.split(/[\+\-\*\/]/);
            let operators = display.trim().match(/[\+\-\*\/]/g)

            if (display[1] == "-") {
                valueA = parseInt(display[1] + values[1].trim());
                valueB = parseInt(values[2]);
                operator = operators[1];
            }
            else {
                valueA = parseInt(values[0]);
                valueB = parseInt(values[1]);
                operator = operators[0];
            }

            calculate(valueA, operator, valueB);
        }

        if (pressedButton.value == "clear") {
            clearDisplayBar();
        }
    })
})

async function calculate(valueA, operator, valueB) {
    await calculatorApi.calculate(valueA, operator, valueB)
        .then(result => displayBar.value = result);

    insertHistory(display, displayBar.value);
}

function clearDisplayBar() {
    displayBar.value = "";
}

function insertHistory(display, result) {
    historyList.innerHTML +=
        `<li>
        <span>${display} =</span>
        <p>${result}</p>
        <hr>
    </li>`
}