document.addEventListener("DOMContentLoaded", function () {
  let texts = document.querySelectorAll(".nav-button-text");

  texts.forEach((text) => {
    if (text.textContent.length >= 14) {
      text.textContent = text.textContent.substring(0, 15) + "...";
    }
  });
});
