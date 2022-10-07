var elCurrencyForm = document.querySelector(".currency-form");
var elCurrencyInput = elCurrencyForm.querySelector(".currency-input");
var elCurrencySelect = elCurrencyForm.querySelector(".form-select");
var elCurrencyResult = elCurrencyForm.querySelector(".badge");


elCurrencyForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var elCurrencyInputValue = Number(elCurrencyInput.value);

    elCurrencyResult.textContent = elCurrencySelect.value * elCurrencyInputValue;

})