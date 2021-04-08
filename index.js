const breakfastChoice = document.getElementById("breakfastChoice")
const lunchChoice = document.getElementById("lunchChoice")
const dinnerChoice = document.getElementById("dinnerChoice")

function getOption() {
    breakfastElement =  document.querySelector('#breakfast');
              
    breakfastOutput = breakfastElement.value;

    // document.querySelector('.breakfast').textContent = breakfastOutput;

    lunchElement =  document.querySelector('#lunch');
              
    lunchOutput = lunchElement.value;

    dinnerElement =  document.querySelector('#dinner');
              
    dinnerOutput = dinnerElement.value;

    breakfastChoice.innerText = breakfastOutput
    lunchChoice.innerText = lunchOutput
    dinnerChoice.innerText = dinnerOutput
}