// Valores das moedas
const valores = {
    "BRL": 1,
    "USD": 0.19,
    "EUR": 0.16,
    "GBP": 0.14, 
    "JPY": 20.74 
}

// Funçao para converter
function converter() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Condicionamento
    if (isNaN(amount) || amount <= 0) {
        alert("valor válido.");
        return;
    }

    if (fromCurrency === toCurrency) {
        alert("Por favor, selecione moedas diferentes");
        return;
    }

    // Calculo
    const result = amount * valores[toCurrency] / valores[fromCurrency];

    // Saida de dados
    document.getElementById("result").innerHTML = `${result.toFixed(2)} ${toCurrency}`;
}
