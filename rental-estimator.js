let estimateBtn = document.getElementById('estimateCost');

var extraPerDay = 0;
let numberOfDays = document.getElementById('numDays');

function getCarRental() {
    numberOfDays = Number(numberOfDays);
    let carRental = 29.99 * numberOfDays;
    carRentalAmount = document.getElementById('carRentalAmount');
    carRentalAmount.innerText = carRental;
}

function getOptions() {
    let options = document.getElementById('options')
    
    let isTollTag = document.getElementById('tollTag').checked;

    if (isTollTag) {
        extraPerDay += 3.95;
        console.log(extraPerDay);
    }

    let gps = document.getElementById('gps').checked;

    if (gps) {
        extraPerDay += 4.95;
        console.log(extraPerDay);
    }

    let roadside = document.getElementById('roadside').checked;

    if (roadside) {
        extraPerDay += 2.95;
        console.log(extraPerDay);
    }

    options.innerText = extraPerDay;
}

function underAgeCharge(){
    let underAge = document.getElementById('underAgeAmount');
    let underAgeChecked = document.getElementById('underAge');
    if(underAgeChecked.checked){
        extraPerDay = (extraPerDay * .3) + extraPerDay;
        underAge.innerText = extraPerDay;
    } else{
        underAge.innerText = 0;
    }
}

function getTotal(total){
    let total = document.getElementById('total');
    total = Number(total) + getCarRental() + underAgeCharge() + getOptions();
    total.innerText = total;
}


function getEstimate() {
    getCarRental();
    getOptions();
    underAgeCharge();
    getTotal(extraPerDay);
}

window.onload = function() {
    estimateBtn.addEventListener('click', getEstimate);
}



