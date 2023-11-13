console.clear();

const questionElement = document.querySelector('[data-js="your-question"]');
const answerElement = document.querySelector('[data-js="your-answer"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = questionElement.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});

answerElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});

const submitButton = document.querySelector('[data-js="form__submit-button"]');

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formElements = e.target.elements;
});
