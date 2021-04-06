let billAmount = document.getElementById("billamt");
let allOptions = document.getElementById("serviceQual");
let peopleAmount = document.getElementById("peopleamt");
let calculateBtn = document.getElementById("calculate");
let each = document.getElementById("each");
let tip = document.getElementById("tip");

calculateBtn.onclick = function () {
  let bill = billAmount.value;
  let tipOption = allOptions.value;
  let numOfPeople = peopleAmount.value;
  if (bill == "" || numOfPeople == "" || tipOption == "0") {
    alert("Please fill all field");
  } else {
    finalBill = (bill * tipOption) / numOfPeople;
    tip.innerText = finalBill.toFixed(2);
    if (numOfPeople >= 2) {
      each.style.display = "block";
    } else {
      each.style.display = "none";
    }
  }
};
