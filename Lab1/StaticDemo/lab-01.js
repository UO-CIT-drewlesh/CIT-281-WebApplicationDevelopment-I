// Lab 01 logic for browser

// Sample car object
let car = {
    make: "Ford",
    model: "Mustang",
    vin: "4S3BMHB68B3286050",
    color: "Red",
    year: 2019,
    mileage: 1234,
    used: true,
    owners: [
        { last: "Last1", first: "First1" },
        { last: "Last2", first: "First2" }
    ]
};

// Function to get car make and model (regular)
function getCarMakeModel(car) {
    return car.make + " " + car.model;
}

// Arrow functions variations
const getCarMakeModelImplicit = car => car.make + " " + car.model;
const getCarMakeModelExplicit = car => { return car.make + " " + car.model; };
const getCarMakeModelDestructure = car => {
    const { make, model } = car;
    return make + " " + model;
};

// Function to display all car properties
function listCarProperties() {
    let output = "";
    for (let prop in car) {
        if (car.hasOwnProperty(prop)) {
            output += `${prop}: ${JSON.stringify(car[prop])}\n`;
        }
    }
    document.getElementById('carProps').innerText = output;
}

// Function to run string module demo
function stringDemo() {
    const input = document.getElementById('inputString').value;
    const concatenated = window.concatenateString(input);
    const reversed = window.reverseString(concatenated);
    document.getElementById('stringOutput').innerText = `Result: ${reversed}`;
}

// Function to run car demo
function carDemo() {
    const output = `
Regular: ${getCarMakeModel(car)}
Implicit: ${getCarMakeModelImplicit(car)}
Explicit: ${getCarMakeModelExplicit(car)}
Destructured: ${getCarMakeModelDestructure(car)}
    `;
    document.getElementById('carOutput').innerText = output;
}
