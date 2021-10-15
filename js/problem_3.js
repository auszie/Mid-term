const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here

let buttonCount = 0;

clickCountButton.textContent = "You clicked the button " + buttonCount + " times";

clickCountButton.addEventListener('click', () => {
    buttonCount ++;
    clickCountButton.textContent = "You clicked the button " + buttonCount + " times";
});