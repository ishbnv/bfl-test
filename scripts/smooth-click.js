document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".button__cover");
  const quizSection = document.querySelector(".quiz");

  if (button && quizSection) {
    button.addEventListener("click", function () {
      quizSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});