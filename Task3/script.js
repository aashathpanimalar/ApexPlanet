const quizData = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Method", "Document Oriented Model"],
    answer: "Document Object Model"
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const"],
    answer: "const"
  },
  
];

function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${index + 1}. ${q.question}</strong></p>
      ${q.options
        .map(
          (option) =>
            `<label><input type="radio" name="q${index}" value="${option}" /> ${option}</label>`
        )
        .join("")}
    `;
    quizContainer.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;

  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const result = document.getElementById("quiz-result");
  result.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuiz();


function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("joke-text").textContent = data.joke;
    })
    .catch(() => {
      document.getElementById("joke-text").textContent = "Failed to load joke.";
    });
}
