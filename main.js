var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".travel-input");
var elAlert = document.querySelector(".alert");

var aDollor = 11063.05;
var aEuro = 10940.25;

var hotel = 250;
var ticket = 500;
var travel = 120;

var totel = hotel * aDollor + ticket * aDollor + travel * aEuro;

var travelCosts = totel.toFixed(0)

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var inputValue = Number(elInput.value);

    if(inputValue >= travelCosts){
        elAlert.textContent = "Oq yo'l";
        elAlert.classList.remove("alert-danger");
        elAlert.classList.add("alert-success");
    }   else {
        elAlert.textContent = "Pulingiz yetmaydi afsus...";
        elAlert.classList.remove("alert-success")
        elAlert.classList.add("alert-danger");
    }
})

