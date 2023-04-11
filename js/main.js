const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');

const totalPriceElement  = document.querySelector('#total-price');

const inputs = document.querySelectorAll('input');
const inputsRadio = document.querySelectorAll('input[name="type"]');
const inputsBuilding = document.querySelectorAll('input[name="building"]');
const inputsRooms = document.querySelectorAll('input[name="rooms"]');

const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');


squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value
});
squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value
});

const basePrice = 6000;
calculate();

inputs.forEach((input) => {
    input.addEventListener('change', calculate);
})

function calculate() {
    let totalPrice = parseInt(squareInput.value) * basePrice;

    for (input of inputsRadio) {
        if(input.checked) {
            totalPrice *= parseFloat(input.value);
        }
    }

    for (input of inputsBuilding) {
        if(input.checked) {
            totalPrice *= parseFloat(input.value);
        }
    }

    for (input of inputsRooms) {
        if(input.checked) {
            totalPrice *= parseFloat(input.value);
        }
    }

    if (ceilings.checked) {
        totalPrice = totalPrice + parseInt(squareInput.value) * 900;
    }

    if(walls.checked) {
        totalPrice *= parseFloat(walls.value);
    }

    if(floor.checked) {
        totalPrice *= parseFloat(floor.value)
    }

    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);
}
