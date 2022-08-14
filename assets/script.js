// Questions arrays
var questionsArray = [
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        corAnswer: "parenthese"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        corAnswer: "alerts"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        corAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        corAnswer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }];

// Declared var
var score = 0;
var questionChoices = 0;
var openScreen = document.querySelector("open-screen");

// Seconds in timer
var seconds = 75;
var timeInterval = 0;
var penaltyTime = 10;
var startButton = document.querySelector("#startBtn");
var nextButton = document.querySelector("#nextBtn");
var timer = document.querySelector("#timer");
var questions = document.querySelector("#questions");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");


// Click Start Button to activate countdown timer 
startButton.addEventListener("click", function () {
    if (timeInterval === 0) {
        timeInterval = setInterval(function () {
            seconds--;
            timer.textContent = seconds;

            if (seconds <= 0) {
                clearInterval(timeInterval);
                allDone();
                timer.textContent = "Time's up!";
            }
        },1000);
    }
});

//Displaying question on screen
function displayQuestion(){
    if (questionChoices < questionsArray.length) {
        questions.textContent = questionsArray[questionChoices].questions;
        answerA.textContent = questionsArray[questionChoices].selection[0];
        answerB.textContent = questionsArray[questionChoices].selection[1];
        answerC.textContent = questionsArray[questionChoices].selection[2];
        answerD.textContent = questionsArray[questionChoices].selection[3];
    } else {
        gameOver();
    }
}
// Function that asks the quesitons and displays the choices 
// function render(questionChoices) {
//     openScreen.innerHTML= "";
//     createUl.innerHTML = "";
//     for (var i = 0; i < questionsArray.length; i++) {
//         var questionsAsk = questionsArray[questionChoices].question;
//         var answerOptions = questionsArray[questionChoices].choices;
//         openScreen.textContent = questionsAsk;
//     }

//     answerOptions.forEach(function (newItem) {
//         var listItem = document.createElement("li");
//         listItem.textContent = newItem;
//         openScreen.appendChild(createUl);
//         create.appendChild(listItem);
//         listItem.addEventListener("click", (compare));
//     })
// }

// function compare(event) {
//     var element = event.target;

//     if(element.matches("li")) {
//         var divCreate = document.createElement("div");
//         divCreate.setAttribute("id", "divCreate");
//         // for Correct answers
//         if (element.textContent == questionsArray[questionChoices].corAnswer) {
//             score++;
//             divCreate.textContent = "Yay! That is CORRECT!";
//         } else {
//             // tine pentality -10 seconds 
//             seconds = seconds - penaltyTime;
//             divCreate.textContent = "Sorry, that is INCORRECT."
//         }
//     }
// }

// var answerChoices = $("#answer-choices");
// var answer = answerChoices.val();
// console.log(answer)


