let buttons = document.querySelectorAll(".answer-btn");
let questionCards = document.querySelectorAll(".question-block");
let output = document.getElementById("output-message");
let resultContainer = document.getElementById("result-container");
let resultText = document.getElementById("result-text");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let questionCard = buttons[i].parentElement.parentElement.parentElement;
    let questionButtons = questionCard.querySelectorAll(".answer-btn");

    for (let j = 0; j < questionButtons.length; j++) {
      questionButtons[j].classList.remove("selected");
    }
    buttons[i].classList.add("selected");

    let personality = buttons[i].getAttribute("data-personality");

    if (personality === "Explorer") {
      output.textContent = "That sounds adventurous!";
    } else if (personality === "Helper") {
      output.textContent = "That is a caring choice!";
    } else if (personality === "Planner") {
      output.textContent = "That sounds well thought out!";
    } else if (personality === "Creative") {
      output.textContent = "That is a creative choice!";
    }
  });
}

let showResultButton = document.getElementById("show-result");

showResultButton.addEventListener("click", function() {
  let totalScore = 0;
  let allQuestionsAnswered = true;

  for (let i = 0; i < questionCards.length; i++) {
    let selectedButton = questionCards[i].querySelector(".selected");

    if (selectedButton === null) {
      allQuestionsAnswered = false;
    } else {
      totalScore = totalScore + Number(selectedButton.getAttribute("data-points"));
    }
  }

  resultContainer.style.display = "block";

  if (allQuestionsAnswered === false) {
    resultText.textContent = "Please choose one answer for every question first.";
  } else if (totalScore >= 4 && totalScore <= 6) {
    resultText.textContent = "You are an Explorer! You enjoy discovering new things.";
  } else if (totalScore >= 7 && totalScore <= 9) {
    resultText.textContent = "You are a Helper! You care about the people around you.";
  } else if (totalScore >= 10 && totalScore <= 12) {
    resultText.textContent = "You are a Planner! You like to think things through.";
  } else if (totalScore >= 13 && totalScore <= 16) {
    resultText.textContent = "You are Creative! You enjoy expressing your ideas.";
  }
});
