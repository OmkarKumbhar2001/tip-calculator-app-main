document.querySelector(".five").addEventListener("click", function () {
    totalValues();
    totalAmount = ((totalBill * 5) / 100);
    calculation();
    update();
});
document.querySelector(".ten").addEventListener("click", function () {
    totalValues();
    totalAmount = ((totalBill * 10) / 100);
    calculation();
    update();
});
document.querySelector(".fifteen").addEventListener("click", function () {
    totalValues();
    totalAmount = ((totalBill * 15) / 100);
    calculation();
    update();
});
document.querySelector(".twentyfive").addEventListener("click", function () {
    totalValues();
    totalAmount = ((totalBill * 25) / 100);
    calculation();
    update();
});
document.querySelector(".zero").addEventListener("click", function () {
    totalValues();
    totalAmount = ((totalBill * 0) / 100);
    calculation();
    update();
});
document.querySelector(".custom").addEventListener("keypress", function () {
    totalValues();
    totalpersent = document.getElementById('custom_1').value;
    totalAmount = ((totalBill * totalpersent) / 100);
    calculation();
    update();
});
function calculation() {
    perPersonTip = (totalAmount / numberOfPeople);
    perPersonBill = ((parseInt(totalAmount) + parseInt(totalBill)) / numberOfPeople);
    console.log(perPersonTip, perPersonBill);
}
function update() {
    document.querySelector(".perPersonTip").innerHTML = perPersonTip;
    document.querySelector(".perPersonBill").innerHTML = perPersonBill;
}

function totalValues() {
    totalBill = document.getElementById('bill_1').value;
    numberOfPeople = document.getElementById('till_1').value;
}
document.querySelector("#reset").addEventListener("click", function () {
    document.querySelector(".perPersonTip").innerHTML = " 0.00";
    document.querySelector(".perPersonBill").innerHTML = "0.00";
    document.querySelector(".bill").innerHTML = "0";
    document.querySelector(".till").innerHTML = "0";
});