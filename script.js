const start = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

    startButton.addEventListener('click',startGame)

function startGame() {
    console.log('started')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    startButton.classlist.add('hide')
    questionElement.classList.remove('hide')
    setNextQuestion()



}   

function setNextQuestion() {
   showQuestion(shuffledQuestions[currentQuestionIndex]) 

}

function showQuestion(question) {}
    questionElement.innerText = question.question
    question.answers.forEAch(answer => {
    const button = document.createElement('button')
    
}






cont questions = [
    {
    question: 'is a comment in JS made with //',
    answers: [
        {text:'yes', correct: 'true'},
        {text: '', correct: 'false'}
        
    }
]