(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log("Correct");
    } else {
      console.log("Wrong");
    }
  };

  var q1 = new Question("What is my name?", ["Bill", "Elon", "Anand"], 2);

  var q2 = new Question("What do you do?", ["code", "dream", "party"], 0);

  var q3 = new Question("Do you have a pet?", ["yes", "no"], 1);

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt("Please select answer"));

  questions[n].checkAnswer(answer);
})();
