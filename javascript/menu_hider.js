document.addEventListener("DOMContentLoaded", () => {
  let arrow = document.getElementById("nav-recent-arrow");
  let buttons = document.querySelectorAll(".menu-closing-button");
  let link_buttons = document.querySelectorAll(".nav-link");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (arrow.style.transform == "rotate(180deg)") {
        arrow.style.transform = "rotate(0)";
        arrow.style.transition = "0.3s";

        link_buttons.forEach((link) => {
          link.style.visibility = "visible";
        });
      } else {
        arrow.style.transform = "rotate(180deg)";
        arrow.style.transition = "0.3s";

        link_buttons.forEach((link) => {
          link.style.visibility = "hidden";
        });
      }
    });
  });
});
