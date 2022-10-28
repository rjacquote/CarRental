var extraPerDay = 0;
var carRental = 0;


let estimateBtn = document.getElementById('estimateCost');
estimateBtn.addEventListener('click', getEstimate);

function getCarRental() {
    let numberOfDays = document.getElementById('numDays').value;
    numberOfDays = Number(numberOfDays);
    carRental = 29.99 * numberOfDays;
    carRentalAmount = document.getElementById('carRentalAmount');
    console.log(carRental);
    carRentalAmount.innerText = carRental;
}

function getOptions() {
    let options = document.getElementById('options')
    let numberOfDays = document.getElementById('numDays').value;
    numberOfDays = Number(numberOfDays);

    let isTollTag = document.getElementById('tollTag').checked;

    if (isTollTag) {
        extraPerDay = extraPerDay + (3.95 * numberOfDays);
        console.log(extraPerDay.toFixed(2));
    }

    let gps = document.getElementById('gps').checked;

    if (gps) {
        extraPerDay += 4.95 * numberOfDays;
        console.log(extraPerDay.toFixed(2));
    }

    let roadside = document.getElementById('roadside').checked;

    if (roadside) {
        extraPerDay += 2.95 * numberOfDays;
        console.log(extraPerDay.toFixed(2));
    }

    options.innerText = extraPerDay.toFixed(2);
}

function underAgeCharge() {
    let underAge = document.getElementById('underAgeAmount');
    let underAgeChecked = document.getElementById('yes');
    if (underAgeChecked.checked) {
        extraPerDay = (extraPerDay * .3) + extraPerDay;
        underAge.innerText = `$${extraPerDay.toFixed(2)}`;
    } else {
        underAge.innerText = 0;
    }
}

function getTotal() {
    let totalInput = document.getElementById('total');
    let totalAmount = extraPerDay + carRental;
    console.log(totalAmount.toFixed(2));
    totalInput.innerText = `$${totalAmount.toFixed(2)}`;
}


function getEstimate() {
    let numberOfDays = document.getElementById('numDays').value;
    numberOfDays = Number(numberOfDays);
    if (numberOfDays == 0 || isNaN(numberOfDays)) {
        alert('Invalid input. Number of days has to be a number greater than 0!');
    } else {
        getCarRental();
        getOptions();
        underAgeCharge();
        getTotal();
    }
}

