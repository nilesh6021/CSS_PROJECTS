// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

const Quizquestions =document.getElementById("question");
const answerList =document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton =document.getElementById("next");

let correntIndex =0;
let score =0;

function loadQuestion(){
    const currentQuetion =questions[correntIndex];
    Quizquestions.textContent =currentQuetion.text;
    answerList.innerHTML="";

    currentQuetion.options.forEach((option,index) =>{
        const li =document.createElement("li");

        li.innerHTML = '<label><input type="radio" name="answer">${options}</label>';
        // li.innerHTML = "<label>${options}</label>";

        answerList.appendChild(li);
    });
    submitButton.style.display="inline-block";
    nextButton.style.display ="none";

}

submitButton.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Please select an answer!");
        return;
    }
    const selectedIndex = Number(selected.value);
    const correctIndex = questions[currentIndex].correct;
    const options = answerList.querySelectorAll("li");

    options[correctIndex].classList.add("correct");
    if (selectedIndex === correctIndex) {
        score++;
    }

    submitButton.style.display = "none";
    nextButton.style.display = "inline-block";
});

nextButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        restartQuiz();
    }
});

function restartQuiz() {
    currentIndex = 0;
    score = 0;
    loadQuestion();
}


loadQuestion();