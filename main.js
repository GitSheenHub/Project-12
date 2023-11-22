$(document).ready(function() {
  const questions = [{
    question: "In Mortal Kombat, how many times did Liu Kang died?",
    answers: [{
      text: "3",
      correct: false
    }, {
      text: "1",
      correct: false
    }, {
      text: "2",
      correct: true
    }, {
      text: "4",
      correct: false
    }]
  }, {
    question: "How many timelines does Mortal Kombat has?",
    answers: [{
      text: "1",
      correct: false
    }, {
      text: "3",
      correct: true
    }, {
      text: "4",
      correct: false
    }, {
      text: "2",
      correct: false
    }]
  }, {
    question: "What\'s Smoke real name?",
    answers: [{
      text: "Tomas",
      correct: true
    }, {
      text: "Taeven",
      correct: false
    }, {
      text: "Taegon",
      correct: false
    }, {
      text: "Takashi",
      correct: false
    }]
  }, {
    question: "Which Mortal Kombat game is NOT apart of the spin-off series?",
    answers: [{
      text: "Mortal Kombat: Shaolin Monks",
      correct: false
    }, {
      text: "Mortal Kombat Mythologies: Sub-Zero",
      correct: false
    }, {
      text: "Mortal Kombat: Deception",
      correct: true
    }, {
      text: "Mortal Kombat: Special Forces",
      correct: false
    }]
  }, {
    question: "Which Kombantant is NOT from Earthrealm?",
    answers: [{
      text: "Nightwolf",
      correct: false
    }, {
      text: "Stryker",
      correct: false
    }, {
      text: "Tremor",
      correct: false
    }, {
      text: "Havik",
      correct: true
    }]
  }, {
    question: "Which Kombantant is NOT from Outworld?",
    answers: [{
      text: "Nitara",
      correct: false
    }, {
      text: "Skarlet",
      correct: false
    }, {
      text: "Baraka",
      correct: false
    }, {
      text: "Quan Chi",
      correct: true
    }]
  }, {
    question: "Which Kombantant is NOT from Neitherealm?",
    answers: [{
      text: "Noob Saibot",
      correct: false
    }, {
      text: "Sareena",
      correct: false
    }, {
      text: "Shang Tsung",
      correct: true
    }, {
      text: "Moloch",
      correct: false
    }]
  }, {
    question: "In Mortal Kombat, what is Babality?",
    answers: [{
      text: "A finisher that allows players to turn their defeated opponents into infant versions of themselves.",
      correct: true
    }, {
      text: "A finisher that allows players to turn themselves into infants for victory.",
      correct: false
    }, {
      text: "A finisher that allows players to turn themselves into infants before performing a fatality.",
      correct: false
    }, {
      text: "A finisher that allows players to turn themselves into infants in order to surrender.",
      correct: false
    }]
  }, {
    question: "Which country does Takeda originate?",
    answers: [{
      text: "Japan",
      correct: false
    }, {
      text: "Philippines",
      correct: false
    }, {
      text: "Vietnam",
      correct: false
    }, {
      text: "Thailand",
      correct: true
    }]
  }, {
    question: "To whom Raiden was talking to when he says, \"They care only for what's in your heart, not who your heart desires\"?",
    answers: [{
      text: "Kung Lao",
      correct: false
    }, {
      text: "Bo' Rai Cho",
      correct: false
    }, {
      text: "Kung Jin",
      correct: true
    }, {
      text: "Cassie Cage",
      correct: false
    }]
  }, {
    question: "How many Kombant Kids are there in total?",
    answers: [{
      text: "4",
      correct: true
    }, {
      text: "8",
      correct: false
    }, {
      text: "10",
      correct: false
    }, {
      text: "1",
      correct: false
    }]
  }, {
    question: "In the current Mortal Kombat timeline, who\’s responsible for Kenshi losing his sight?",
    answers: [{
      text: "Reiko",
      correct: false
    }, {
      text: "Mileena",
      correct: true
    }, {
      text: "Shang Tsu",
      correct: false
    }, {
      text: "Shao Kahn",
      correct: false
    }]
  }]
  //VARIABLES//
  const startButton = $('#start-btn');
  const nextButton = $('#next-btn');
  const questionContainer = $('#question-container');
  const questionElement = $('#question');
  const answerBtnsElement = $('#answer-buttons');
  let shuffledQuestions, currentQuestionIndex;
  let score = 0;
  $('#start-btn').on('click', function() {
    startGame(questions); // Pass the questions array to the startGame function
  });
  $('#next-btn').on('click', function() {
    currentQuestionIndex++;
    nextQuestion();
  });

  function startGame(questions) {
    $('#start-btn').addClass('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    $('#question-container').removeClass('hide');
    nextQuestion();
  }

  function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    $('#question').text(question.question);
    question.answers.forEach(answer => {
      const button = $('<button>'); // Use $() to create a new button element
      button.text(answer.text);
      button.addClass('btn');
      if(answer.correct) {
        button.data('correct', answer.correct);
      }
      button.click(selectAnswer);
      $('#answer-buttons').append(button);
    });
  }

  function resetState() {
    $('#next-btn').addClass('hide');
    $('#answer-buttons').empty(); // Use empty() to clear the answer buttons
  }

  function selectAnswer(e) {
    const selectedButton = $(e.target);
    const correct = selectedButton.data('correct');
    if(correct) {
      score++;
    }
    setStatusClass(selectedButton, correct);
    $('#answer-buttons').find('button').each(function() {
      setStatusClass($(this), $(this).data('correct'));
    });
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
      $('#next-btn').removeClass('hide');
    } else {
      $('#question').text(`You scored ${score} out of ${shuffledQuestions.length}!`);
      $('#start-btn').text('Start Over');
      $('#start-btn').removeClass('hide');
    }
  }

  function setStatusClass(element, correct) {
    element.removeClass('correct incorrect');
    if(correct) {
      element.addClass('correct');
    } else {
      element.addClass('incorrect');
    }
  }
});



