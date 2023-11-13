console.clear();

//toggle bookmark Icon

const bookmark = document.querySelector('img[data-js="question-card__icon"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("filled");

  if (bookmark.classList.contains("filled")) {
    bookmark.setAttribute("src", "./Images/bookmark_filled.png");
  } else {
    bookmark.setAttribute("src", "./Images/bookmark.png");
  }
});

// toggle answer

const showAnswerButton = document.querySelector(
  '[data-js="question-card__button"]'
);
const answer = document.querySelector('[data-js="question-card__answer"]');

function toggleButtonText() {
  showAnswerButton.textContent == "Show Answer"
    ? (showAnswerButton.textContent = "Hide Answer")
    : (showAnswerButton.textContent = "Show Answer");
}

showAnswerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
  toggleButtonText();
});


