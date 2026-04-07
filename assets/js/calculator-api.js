const calculatorApi = {}

calculatorApi.calculate = (firstValue = 0, operation = '+', secondValue = 0) => {
    const url = `https://localhost:7273/Calculator/calculate?firstValue=${firstValue}&operation=${encodeURIComponent(operation)}&secondValue=${secondValue}`;

    return fetch(url, {
        method: "POST"
    })    
        .then((response) => response.json());
}