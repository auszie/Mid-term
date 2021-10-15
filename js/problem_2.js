// Helps us pluralize word formatting by returning if we should
// add an 's' for a given quantity.
//
// For example, we should say '1 car' but '5 cars'
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

const thingInput = document.querySelector('#problem-2 #thing-num-input');
const thingCountOutput = document.querySelector('#problem-2 #thing-count');

// Write your code here

thingInput.addEventListener('change', outputValue);


function outputValue(){
    if (thingInput.value == '0') {

        thingCountOutput.textContent = "You added NaN thing";
    }
    else if (thingInput.value == '1'){
        thingCountOutput.textContent = "You added " + thingInput.value + " thing";
    }
    else {

        thingCountOutput.textContent = "You added " + thingInput.value + " things";
    }        
}

