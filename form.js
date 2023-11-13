console.clear();

// text counter

const questionElement = document.querySelector('[data-js="yourQuestion"]');
const answerElement = document.querySelector('[data-js="yourAnswer"]');
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const maxLengthQuestion = questionElement.getAttribute("maxlength");
const maxLengthAnswer = answerElement.getAttribute("maxlength");

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.innerText = value;
};

const updateAmountLeftAnswer = (value) => {
  amountLeftAnswer.innerText = value;
};

updateAmountLeftQuestion(maxLengthQuestion);
updateAmountLeftAnswer(maxLengthAnswer);

questionElement.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - questionElement.value.length);
});

answerElement.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - answerElement.value.length);
});

//sumbit form data

const main = document.querySelector('[data-js="main-content"]');

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const newCard = document.createElement("section");
  const question = document.createElement("p");
  const img = document.createElement("img");
  const button = document.createElement("button");
  const newAnswer = document.createElement("p");
  const tags = document.createElement("ul");
  const cardtag = document.createElement("li");

  newCard.classList.add("question-card");
  question.classList.add("question-card__title");
  question.textContent = yourQuestion.value;
  img.classList.add("question-card__icon");
  img.setAttribute("data-js", "question-card__icon");
  img.setAttribute("src", "./Images/bookmark.png");
  button.setAttribute("type", "button");
  button.classList.add("question-card__button");
  button.setAttribute("data-js", "question-card__button");
  button.textContent = "Show Answer";
  newAnswer.classList.add("question-card__answer");
  newAnswer.classList.add("hidden");
  newAnswer.textContent = yourAnswer.value;
  newAnswer.setAttribute("data-js", "question-card__answer");
  tags.classList.add("question-card__tags");
  cardtag.classList.add("question-card__tag");
  cardtag.textContent = tag.value;

  main.append(newCard);
  newCard.append(question);
  newCard.append(img);
  newCard.append(button);
  newCard.append(newAnswer);
  newCard.append(tags);
  tags.append(cardtag);

  //add fuctionality to new buttons

  const bookmark = document.querySelector('img[data-js="question-card__icon"]');

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("filled");

    if (bookmark.classList.contains("filled")) {
      bookmark.setAttribute("src", "./Images/bookmark_filled.png");
    } else {
      bookmark.setAttribute("src", "./Images/bookmark.png");
    }
  });

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

  e.target.reset();
});
