// Trivia

type Question = {
    id: number,
    text: string,
    answer: string,
    wrongAnswers: Array<string>;
}

// Hardcoded questions
const questions: Question[] = [
    {
        id: 1,
        text: "What is the biggest commercial plane in the world?",
        answer: "Airbus A3080",
        wrongAnswers: ["Boeing 747-800i", "Antonov AN 225", "Boeing 777X"]
    },

    {
        id: 2,
        text: "What is the CPU maker with a red logo?",
        answer: "AMD",
        wrongAnswers: ["Intel", "Nvidia", "MediaTek"]
    },

    {
        id: 3,
        text: "Name 3 independent base Linux distributions: ",
        answer: "Arch, RHEL, Debian",
        wrongAnswers: ["Ubuntu, Manjaro, Fedora", "Solus, Void, Linux Mint", "Slackware, FreeBSD, Gentoo"]
    }

];

// Elements inside document
// ps: all of them might me null due to no guarantee to exist in the DOM
const scoreE1 = document.getElementById("score");
const answerSelectE1 = document.getElementById("answerSelect");
const questionTextE1 = document.getElementById("questionText");
const submitButtonE1 = document.getElementById("submitButton");
const startButtonE1 = document.getElementById("startButton");
const h1Text = document.getElementById("title");

// Which question we are
let index = 0;

// Total of correct answers
let correct = 0;

// Events
// Get rid of optional chaining

if (
    scoreE1 &&
    answerSelectE1 &&
    answerSelectE1 &&
    questionTextE1 &&
    submitButtonE1 &&
    startButtonE1 &&
    h1Text
) {

    // ~le functions
    const getNextQuestion = (): Question => {
        return questions[index++];
    }

    // Scramble answers
    const scrambleAnswers = (answers: string[]): string[] => {
        return answers.sort(() => Math.random() - 0.5);
    }

    const displayQuestion = (q: Question): void => {
        questionTextE1.innerHTML = q.text;
        answerSelectE1.innerHTML = ""; // Wiping out previous questions, just in case

        const answers = scrambleAnswers([...q.wrongAnswers, q.answer]); // Possible answers fo the player

        answers.forEach(answer => {
            const newAnswer = document.createElement("option");
            newAnswer.value = answer;
            newAnswer.innerText = answer;
            answerSelectE1.appendChild(newAnswer);
        });
    }

    const showScore = () => {
        const score = Math.floor((correct / questions.length) * 100);
        answerSelectE1.style.display = "none";
        questionTextE1.style.display = "none";
        submitButtonE1.style.display = "none";
        scoreE1.style.display = "block";
        scoreE1.innerText = `Final Score: ${score}%`;
    }

    submitButtonE1.addEventListener("click", () => {
        // Correct question or not
        if (questions[index - 1].answer === (<HTMLSelectElement>answerSelectE1).value) {
            correct++;
        }

        if (index < questions.length) {
            displayQuestion(getNextQuestion());
        }

        // Trivia end
        else {
            showScore();
        }
    })

    startButtonE1.addEventListener("click", () => {
        startButtonE1.style.display = "none";
        submitButtonE1.style.display = "block";
        questionTextE1.style.display = "block";
        answerSelectE1.style.display = "block";
        h1Text.style.display = "none";

        const nextQuestion = getNextQuestion();

        // If still having questions, keep game running
        if (nextQuestion) {
            displayQuestion(nextQuestion);

            // Otherwise, conclude (hide items)
        }
    });
}
