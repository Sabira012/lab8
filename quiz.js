$(document).ready(function() {
    // Global arrays
    var questions = [
      "Q1. What is the capital of Kazakhstan?",
      "Q2. What place does Kazakhstan have in the world in terms of land area?",
      "Q3. What is the state language in Kazakhstan?",
      "Q4. What is NOT shown on the flag of Kazakhstan?",
      "Q5. In what year did Kazakhstan gain its independence?"
    ];
    var answers = ["Astana", "9", "Kazakh", "Yurt","1991"];
    var choice_options = [
      ["Almaty", "Shymkent", "Astana", "Aktobe"],
      ["3", "9", "7", "5"],
      ["Kazakh", "Russian", "Uzbek", "Kyrgyz"],
      ["Sun", "Yurt", "Eagle", "Ornament"],
      ["1990","1995","1993","1991"]
    ];
  
// Generate quiz
    var quiz = $("#quiz");
    for (var i = 0; i < questions.length; i++) {
      var question = $("<div>").text(questions[i]);
      quiz.append(question);
      for (var j = 0; j < choice_options[i].length; j++) {
        var option = $("<label>").text(choice_options[i][j]);
        var radio = $("<input>").attr({
          type: "radio",
          name: "question" + i,
          value: choice_options[i][j]
        });
        quiz.append(radio);
        quiz.append(option);
      }
    }
  
// Handle submit button click
    $("#submit").click(function() {
      var score = 0;
      var answersSelected = $("#quiz").find("input:checked");
      for (var i = 0; i < answersSelected.length; i++) {
        if ($(answersSelected[i]).val() === answers[i]) {
          score++;
        }
      }
      $("#score").text("Your score: " + score + " out of " + questions.length);
    });
  });
  