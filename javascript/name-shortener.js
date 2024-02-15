document.addEventListener("DOMContentLoaded", () => {
  let texts = document.querySelectorAll(".nav-button-text");
  const max_length = 17;

  texts.forEach((text) => {
    if (text.textContent.length >= max_length) {
      text.textContent = text.textContent.substring(0, max_length) + "...";
    }
  });
});
