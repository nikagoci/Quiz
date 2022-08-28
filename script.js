// Dom Variables
let question = document.querySelector('.question-1');
let tryAgain = document.querySelector('.try-again');
let tryAgain1 = document.querySelector('.try-again-1')
let checkResult = document.querySelector('.check-result');
let mainScore = document.querySelector('.final-score');
let procentScore = document.querySelector('.final-procent');
let finalText = document.querySelector('.final-text');
let timeLeft = document.querySelector('.time-left');
let timeLeftForm = document.querySelector('.time-left-form')
let currentQuestion = document.querySelector('.current');
let mainForm = document.querySelector('.main-form');
let submitForm = document.querySelector('.submit-form');
let checkResultForm = document.querySelector('.check-result-form');
let submit = document.querySelector('.submit');
let submit2 = document.querySelector('.submit2');
let submit3 = document.querySelector('.submit3');
let submit4 = document.querySelector('.submit4');
let submit5 = document.querySelector('.submit5');
let submit6 = document.querySelector('.submit6');
let submit7 = document.querySelector('.submit7');
let submit8 = document.querySelector('.submit8');
let submit9 = document.querySelector('.submit9');
let submit10 = document.querySelector('.submit10');
let radio1 = document.getElementById('first');
let radio2 = document.getElementById('second');
let radio3 = document.getElementById('third');
let radio4 = document.getElementById('fourth');
let answerText1 = document.getElementById('answer-text-1');
let answerText2 = document.getElementById('answer-text-2');
let answerText3 = document.getElementById('answer-text-3');
let answerText4 = document.getElementById('answer-text-4');
let display = document.querySelector('.live-time');
let newAnswer1 = document.querySelector('.answered-1');
let newAnswer2 = document.querySelector('.answered-2');
let newAnswer3 = document.querySelector('.answered-3');
let newAnswer4 = document.querySelector('.answered-4');

// Normal Variables
let finalScore = 0;


// Live Timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            let display = document.querySelector('.live-time');
            display.classList.add('red');
            display.textContent = '00:00';
            mainForm.style.display = 'none';
            timeLeftForm.style.display = 'block';

            if(submitForm.style.display == 'block') {
                timeLeftForm.style.display = 'none';
            }
            if(checkResultForm.style.display == 'block') {
                timeLeftForm.style.display = 'none';
            }
        }
    }, 1000);
}

window.onload = function () {
    let twentyMinutes = 60 * 30,
    display = document.querySelector('.live-time');
    startTimer(twentyMinutes, display);
};

// 1 Map
const question1 = new Map();

question1.set('question1', 'What does CSS stand for?');
question1.set(1, 'Colorful Style Sheets');
question1.set(2, 'Creative Style Sheets');
question1.set(3, 'Computer Style Sheets');
question1.set(4, 'Cascading Style Sheets');
question1.set('correct', 4)
question1.set(true, 'Your answer is true');
question1.set(false, 'Your answer is wrong');

// 2 Map
const question2 = new Map();

question2.set('question2', 'How do you insert a comment in a CSS file?');
question2.set(1, '// this is a comment');
question2.set(2, "'this is a comment");
question2.set(3, '// this is a comment //');
question2.set(4, '/* this is a comment */');
question2.set('correct', 4)
question2.set(true, 'Your answer is true');
question2.set(false, 'Your answer is wrong');

// 3 Map
const question3 = new Map();

question3.set('question3', 'Which HTML attribute is used to define inline styles?');
question3.set(1, 'class');
question3.set(2, 'font');
question3.set(3, 'styles');
question3.set(4, 'style');
question3.set('correct', 3)
question3.set(true, 'Your answer is true');
question3.set(false, 'Your answer is wrong');

// 4 Map 
const question4 = new Map();

question4.set('question4', 'Which CSS property controls the text size?');
question4.set(1, 'font-size');
question4.set(2, 'font-style');
question4.set(3, 'text-size');
question4.set(4, 'text-style');
question4.set('correct', 1)
question4.set(true, 'Your answer is true');
question4.set(false, 'Your answer is wrong');

// 5 Map
const question5 = new Map();

question5.set('question5', 'How do you display hyperlinks without an underline?');
question5.set(1, 'a {decoration:no-underline;}');
question5.set(2, 'a {underline:none;}');
question5.set(3, 'a {text-decoration:none;}');
question5.set(4, 'a {text-decoration:no-underline;}');
question5.set('correct', 3)
question5.set(true, 'Your answer is true');
question5.set(false, 'Your answer is wrong');

// 6 Map
const question6 = new Map();

question6.set('question6', "How do you select an element with id 'demo'?");
question6.set(1, '#demo');
question6.set(2, 'demo');
question6.set(3, '*demo');
question6.set(4, '.demo');
question6.set('correct', 1)
question6.set(true, 'Your answer is true');
question6.set(false, 'Your answer is wrong');

// 7 Map
const question7 = new Map();

question7.set('question7', "How do you select elements with class name 'test'?");
question7.set(1, '#test');
question7.set(2, '*test');
question7.set(3, 'test');
question7.set(4, '.test');
question7.set('correct', 4)
question7.set(true, 'Your answer is true');
question7.set(false, 'Your answer is wrong');

// 8 Map
const question8 = new Map();

question8.set('question8', "What is the default value of the position property?");
question8.set(1, 'relative');
question8.set(2, 'static');
question8.set(3, 'absolute');
question8.set(4, 'fixed');
question8.set('correct', 2)
question8.set(true, 'Your answer is true');
question8.set(false, 'Your answer is wrong');

// 9 Map
const question9 = new Map();

question9.set('question9', "How do you make a text start with a capital letter?");
question9.set(1, 'transform:capitalize');
question9.set(2, 'You can\'t do that with CSS');
question9.set(3, 'text-transform:capitalize');
question9.set(4, 'text-style:capitalize');
question9.set('correct', 3)
question9.set(true, 'Your answer is true');
question9.set(false, 'Your answer is wrong');

// 10 Map
const question10 = new Map();

question10.set('question10', "Which tag is used to define an internal style sheet?");
question10.set(1, '<css>');
question10.set(2, '<style>');
question10.set(3, '<script>');
question10.set(4, '<link>');
question10.set('correct', 2)
question10.set(true, 'Your answer is true');
question10.set(false, 'Your answer is wrong');

// Uncheck Checked Radios

function radioChecked() {
    if(radio1.checked === true || radio2.checked === true || radio3.checked === true || radio4.checked === true){
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        radio4.checked = false;
    }
}

// Function Answers

function answer1() {
    if(radio1.checked) {
        finalScore += 1;

    } else{
        finalScore += 0;

    }
}

function answer2() {
    if(radio2.checked) {
        finalScore += 1;

    } else{
        finalScore += 0;

    }
}

function answer3() {
    if(radio3.checked) {
        finalScore += 1;
    } else{
        finalScore += 0;
    }
}

function answer4() {
    if(radio4.checked) {
        finalScore += 1;
    } else{
        finalScore += 0;
    }
}
// 2 Question

submit.addEventListener('click', (e) => {
    e.preventDefault();
    

    function secondQuestion(){
        question.innerText = question2.get('question2');
        answerText1.innerText = question2.get(1);
        answerText2.innerText = question2.get(2);
        answerText3.innerText = question2.get(3);
        answerText4.innerText = question2.get(4);
        currentQuestion.innerText = 'Current Question: 2/10'
    }

    answer4();
    secondQuestion();
    submit.style.display = 'none';
    submit2.style.display = 'block';
    radioChecked();
    if(radio1.checked == true) {
        allAnswer[2].classList.add('.wrong')
    }
})

// 3 Question

submit2.addEventListener('click', (e) => {
    e.preventDefault();

    function thirdQuestion(){
        question.innerText = question3.get('question3');
        answerText1.innerText = question3.get(1);
        answerText2.innerText = question3.get(2);
        answerText3.innerText = question3.get(3);
        answerText4.innerText = question3.get(4);
        currentQuestion.innerText = 'Current Question: 3/10'
    }

    answer4();
    thirdQuestion();
    submit2.style.display = 'none';
    submit3.style.display = 'block';
    radioChecked();


})

// 4 Question

submit3.addEventListener('click', (e) => {
    e.preventDefault();

    function fourthQuestion(){
        question.innerText = question4.get('question4');
        answerText1.innerText = question4.get(1);
        answerText2.innerText = question4.get(2);
        answerText3.innerText = question4.get(3);
        answerText4.innerText = question4.get(4);
        currentQuestion.innerText = 'Current Question: 4/10'
    }

    answer3();
    fourthQuestion();
    submit3.style.display = 'none';
    submit4.style.display = 'block';
    radioChecked();
})

// 5 Question

submit4.addEventListener('click', (e) => {
    e.preventDefault();

    function fifthQuestion(){
        question.innerText = question5.get('question5');
        answerText1.innerText = question5.get(1);
        answerText2.innerText = question5.get(2);
        answerText3.innerText = question5.get(3);
        answerText4.innerText = question5.get(4);
        currentQuestion.innerText = 'Current Question: 5/10'
    }

    answer1();
    fifthQuestion();
    submit4.style.display = 'none';
    submit5.style.display = 'block';
    radioChecked();
})

// 6 Question

submit5.addEventListener('click', (e) => {
    e.preventDefault();

    function sixthQuestion(){
        question.innerText = question6.get('question6');
        answerText1.innerText = question6.get(1);
        answerText2.innerText = question6.get(2);
        answerText3.innerText = question6.get(3);
        answerText4.innerText = question6.get(4);
        currentQuestion.innerText = 'Current Question: 6/10'
    }

    answer3();
    sixthQuestion();
    submit5.style.display = 'none';
    submit6.style.display = 'block';
    radioChecked();
})

// 7 Question

submit6.addEventListener('click', (e) => {
    e.preventDefault();

    function seventhQuestion(){
        question.innerText = question7.get('question7');
        answerText1.innerText = question7.get(1);
        answerText2.innerText = question7.get(2);
        answerText3.innerText = question7.get(3);
        answerText4.innerText = question7.get(4);
        currentQuestion.innerText = 'Current Question: 7/10'
    }

    answer1();
    seventhQuestion();
    submit6.style.display = 'none';
    submit7.style.display = 'block';
    radioChecked();
})

// 8 Question

submit7.addEventListener('click', (e) => {
    e.preventDefault();

    function eightQuestion(){
        question.innerText = question8.get('question8');
        answerText1.innerText = question8.get(1);
        answerText2.innerText = question8.get(2);
        answerText3.innerText = question8.get(3);
        answerText4.innerText = question8.get(4);
        currentQuestion.innerText = 'Current Question: 8/10'
    }

    answer4();
    eightQuestion();
    submit7.style.display = 'none';
    submit8.style.display = 'block';
    radioChecked();
})

// 9 Question

submit8.addEventListener('click', (e) => {
    e.preventDefault();

    function ninthQuestion(){
        question.innerText = question9.get('question9');
        answerText1.innerText = question9.get(1);
        answerText2.innerText = question9.get(2);
        answerText3.innerText = question9.get(3);
        answerText4.innerText = question9.get(4);
        currentQuestion.innerText = 'Current Question: 9/10'
    }

    answer2();
    ninthQuestion();
    submit8.style.display = 'none';
    submit9.style.display = 'block';
    radioChecked();
})

// 10 Question

submit9.addEventListener('click', (e) => {
    e.preventDefault();

    function tenQuestion(){
        question.innerText = question10.get('question10');
        answerText1.innerText = question10.get(1);
        answerText2.innerText = question10.get(2);
        answerText3.innerText = question10.get(3);
        answerText4.innerText = question10.get(4);
        currentQuestion.innerText = 'Current Question: 10/10'
    }

    answer3();
    tenQuestion();
    submit9.style.display = 'none';
    submit10.style.display = 'block';
    radioChecked();
})

// New Form Button

submit10.addEventListener('click', (e) => {
    e.preventDefault();
    const procentageFinal = finalScore * 100 / 10;

    answer2()
    mainForm.style.display = 'none';
    submitForm.style.display = 'block';
    
    mainScore.textContent = `${finalScore} of 10`;
    procentScore.textContent = `${finalScore * 100 / 10}%`;

    if(procentageFinal >= 0 && procentageFinal <= 25) {
        finalText.textContent = `You failed. Try again later.`
    } else if(procentageFinal > 25 && procentageFinal <= 50) {
        finalText.textContent = `Keep trying. You are doing well.`
    } else if(procentageFinal > 50 && procentageFinal <= 75) {
        finalText.textContent = `Nice job, but you can do better.`
    } else{
        finalText.textContent = `Amazing! You are ready for developing.`
    }

    const sumOfTime = display.textContent;
    timeLeft.textContent = sumOfTime;
})

// Reload Page

tryAgain.addEventListener('click', ()=> {
    window.location.reload();
})

tryAgain1.addEventListener('click', () => {
    window.location.reload();
})

// Check Result Button

checkResult.addEventListener('click', () => {
    submitForm.style.display = 'none';
    checkResultForm.style.display = 'block';
})


