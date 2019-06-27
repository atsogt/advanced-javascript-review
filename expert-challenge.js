(function() {
  function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ": " + this.answer[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log("Correct");
    } else {
      console.log("Wrong, try again");
    }
  };

  var q1 = new Question("Is Javascript cool?", ["yes", "no", "maybe"], 0);

  var q2 = new Question("What is my name?", ["DT", "Bill", "Anand"], 2);

  var q3 = new Question(
    "Where did I grow up?",
    ["China", "America", "Australia"],
    1
  );
  var questions = [q1, q2, q3];
  //instances
  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer));

      nextQuestion();
    }
  }
  nextQuestion();
})();
