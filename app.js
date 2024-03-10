const quizData = [
    {
        question: "What is the Capital of Egypt?",
        options: ["Ougadougou", "Cairo", "Dennmark", "Odessa"],
        flavorText: "",
        hint: [0, 3],
        correctAnswer: "B"
    },
    {
        question: "Alexander the -?",
        options: ["Unslain", "Mighty", "Great", "Unbothered"],
        hint: [0, 3],
        correctAnswer: "C"
    },
    {
        question: "Where do dolphins live?",
        options: ["The Sea", "Space", "The Great Mountains", "Jersey"],
        hint: [1, 3],
        correctAnswer: "A"
    },
    {
        question:"What is the name of Todo's Cursed Technique?",
        options: ["Electric Slide", "Get Down!", "Electric Boogaloo","Boogie Woogie"],
        hint: [0, 2],
        correctAnswer: "D"
    },
    {
        question:"What is the largest animal on earth?",
        options: ["Whale Shark", "Blue Whale", "Elephant","Giant Ground Sloth"],
        hint: [2, 3],
        correctAnswer: "B"
    },
    {
        question:"Which country is Nokia from?",
        options: ["Norway", "Denmark", "Sweden","Finland"],
        hint: [0, 1],
        correctAnswer: "D" 
    },
    {
        question: "Which mythical monster cannot be seen in mirrors?",
        options: ["Werewolf", "Lich", "Vampire", "Ghoul"],
        hint: [0, 3],
        correctAnswer: "C"
    },
    {
        question: "Which of these is not a real type of fish?",
        options: ["Stonefish", "Woodfish", "Lionfish", "Zebrafish"],
        hint: [0, 2],
        correctAnswer: "B"
    }
    // Add more questions here...
];

const questionNumber = document.querySelector(".question-number");
const quizTitle = document.querySelector(".quiz-title");
const questionText = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".options-container");
const scoreElement = document.querySelector(".score");
const hintButton = document.querySelector(".hint");

var optionsArray = [];
var hintsLeft = 3;


const option1 = document.getElementById("option-A");
const option2 = document.getElementById("option-B");
const option3 = document.getElementById("option-C");
const option4 = document.getElementById("option-D");

var hintNumber = document.getElementById("hint-number");
var hintNumberElement = document.querySelector(".hint-count");

optionsArray.push(option1);
optionsArray.push(option2);
optionsArray.push(option3);
optionsArray.push(option4);

var score = 0;
var currentQuestion = 0;
var selectedOption = "";
var hintsOn = false;

let element = document.getElementsByClassName("options-wrapper");
fetchKantoPokemon();


function fetchKantoPokemon(){  
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")  
    .then(response => response.json())  
    .then(allpokemon => console.log(allpokemon))

}

loadQuestion(currentQuestion);

option1.addEventListener("click", ()=>{
    selectedOption = "A";
    checkAnswer();
})

option2.addEventListener("click", ()=>{
    selectedOption = "B";
    checkAnswer();
})

option3.addEventListener("click", ()=>{
    selectedOption = "C";
    checkAnswer();
})

option4.addEventListener("click", ()=>{
    selectedOption = "D";
    checkAnswer();
})

hintButton.addEventListener("click", ()=>{
    if (!hintsOn)
    {
        if (hintsLeft > 0)
        {
            optionsArray[quizData[currentQuestion].hint[0]].style.visibility = "hidden";
            optionsArray[quizData[currentQuestion].hint[1]].style.visibility = "hidden";
            hintsOn = true;
            hintsLeft--;
            
            if (hintsLeft <=0)
                hintNumberElement.textContent = "You're all out of hints!";
            else
                hintNumber.textContent = hintsLeft;
        }
        else
            alert("You're out of hints!");
    } 
})

function loadQuestion(number) {
    questionNumber.textContent = "Question " + (number + 1);
    questionText.textContent = quizData[number].question;

    //If hints were on from the last question, turn hints off and make all options visible again
    if (hintsOn)
    {   
        option1.style.visibility = "visible";
        option2.style.visibility = "visible";
        option3.style.visibility = "visible";
        option4.style.visibility = "visible";

        hintsOn = false;
    }

    option1.textContent = quizData[number].options[0];
    option2.textContent = quizData[number].options[1];
    option3.textContent = quizData[number].options[2];
    option4.textContent = quizData[number].options[3];
}

function checkAnswer() {
    if (selectedOption === quizData[currentQuestion].correctAnswer)
    {
        score+=1;
        scoreElement.textContent = score;
        loadQuestion(currentQuestion + 1);
        currentQuestion = currentQuestion + 1;
        console.log("Right answer!: " + selectedOption);
    }
    else
    {   
        alert("Wrong answer!");
        console.log("Wrong answer! :( : " + selectedOption);
    }
}

function startQuiz() {
    // Initialize the quiz and load the first question
}

//startQuiz();