const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: "Paris"
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C#"],
      correct: "JavaScript"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "None of the above"
      ],
      correct: "Hypertext Markup Language"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    answersEl.innerHTML = '';
  
    currentQuiz.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => selectAnswer(option);
      answersEl.appendChild(button);
    });
  }
  
  function selectAnswer(selectedOption) {
    const currentQuiz = quizData[currentQuestion];
    if (selectedOption === currentQuiz.correct) {
      score++;
    }
    nextBtn.style.display = 'block';
  }
  
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      showResults();
    }
    nextBtn.style.display = 'none';
  });
  
  function showResults() {
    questionEl.textContent = `Quiz Over! Your score is ${score}/${quizData.length}`;
    answersEl.innerHTML = '';
    nextBtn.style.display = 'none';
  }
  
  loadQuiz();