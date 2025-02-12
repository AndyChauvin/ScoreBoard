let boardOne = 0;
let boardTwo = 0

let scoreOne = document.getElementById("score_1");
let scoreTwo = document.getElementById("score_2");





function plusOne() {
    boardOne += 1
    scoreOne.textContent = boardOne;    
};

function plusTwo() {
    boardOne += 2
    scoreOne.textContent = boardOne;    
};


function plusThree() {
    boardOne += 3
    scoreOne.textContent = boardOne;    
};


function plusOne_2() {
    boardTwo += 1
    scoreTwo.textContent = boardTwo;    
};

function plusTwo_2() {
    boardTwo += 2
    scoreTwo.textContent = boardTwo;    
};


function plusThree_2() {
    boardTwo += 3
    scoreTwo.textContent = boardTwo;    
};


function reset() {
    scoreOne.textContent = 0
    scoreTwo.textContent = 0
    boardOne = 0
    boardTwo = 0
} ;







