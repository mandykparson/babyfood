const breakfastChoice = document.getElementById("breakfastChoice")
const lunchChoice = document.getElementById("lunchChoice")
const dinnerChoice = document.getElementById("dinnerChoice")

breakfastElement =  document.querySelector('#breakfast');
lunchElement =  document.querySelector('#lunch');
dinnerElement =  document.querySelector('#dinner');

function getOption() {
              
    breakfastOutput = breakfastElement.value;
              
    lunchOutput = lunchElement.value;
              
    dinnerOutput = dinnerElement.value;

    breakfastChoice.innerText = breakfastOutput
    lunchChoice.innerText = lunchOutput
    dinnerChoice.innerText = dinnerOutput
}

// What a baby needs every day
// A fruit, a veggie, and a protien once a day

const confirmationMessage = document.getElementById("confirmation")

const goodMenu = {
    fruit: 0,
    veggie: 0,
    protein: 0
}

const breakfastNutr = document.getElementById("breakfastNutr")
const lunchNutr = document.getElementById("lunchNutr")
const dinnerNutr = document.getElementById("dinnerNutr")

const button = document.getElementById("btn")
button.addEventListener('click', function() {
    if (breakfastElement.value === "apple","blueberries","apples and oatmeal", "blueberries and yogurt", "apple and pear oatmeal", "berry mix and yogurt" ) {
        goodMenu.fruit++
        breakfastNutr.innerText = "1 fruit"
    }
    
    if (lunchElement.value === "spinach and pear") {
        goodMenu.fruit++
        goodMenu.veggie++
        lunchNutr.innerText = "1 fruit 1 veggie"
    } else {
        goodMenu.veggie++
        lunchNutr.innerText = "1 veggie"
    }

    if (dinnerElement.value === "beef and potato", "chicken and corn", "beef and root vegetables", "chicken and corn"){
        goodMenu.protein++
        goodMenu.veggie++
        dinnerNutr.innerText = "1 protein 1 veggie"
    } else {
        goodMenu.protein++
        dinnerNutr.innerText = "1 protein"
    }
})

button.addEventListener('click', function() {
    if (goodMenu.fruit === 2 && goodMenu.veggie === 2 && goodMenu.protein === 1){
        confirmationMessage.innerText = "This menu meets all of you baby's nutritional needs"
    } else {
        confirmationMessage.innerText = "This menu DOES NOT meet your baby's nutritional needs"
    }

})