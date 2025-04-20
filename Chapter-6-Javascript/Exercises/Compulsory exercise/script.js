window.onload = function() {
    var calculateButton = document.querySelector("#calculate-btn");
    var petrolCostInput = document.querySelector("#petrol-cost");
    var litersInput = document.querySelector("#liters-purchased");
    var totalCostOutput = document.querySelector("#total-cost");

    calculateButton.onclick = function() {
        // Get input values
        var petrolCost = parseFloat(petrolCostInput.value);
        var liters = parseFloat(litersInput.value);

        // Calculate total cost
        var totalCost = petrolCost * liters;

        // Show the result
        totalCostOutput.innerText = "Total Cost: $" + totalCost.toFixed(2);
    };
};
