let button = document.getElementById("dark-mode-button");
let slider = document.getElementById("theme-button-slider");
let pointer = document.getElementById("theme-button-pointer");

button.addEventListener("click", () => {
  //   if (
  //     slider.style.backgroundColor == "" ||
  //     slider.style.backgroundColor == "gray"
  //   ) {
  //     slider.style.backgroundColor = "rgb(32, 78, 244)";
  //     pointer.style.transform = "translate(65%, 0)";
  //   } else {
  //     slider.style.backgroundColor = "gray";
  //     pointer.style.transform = "translate(0, 0)";
  //   }

  if (
    slider.style.backgroundColor == "rgb(32, 78, 244)" ||
    slider.style.backgroundColor == ""
  ) {
    slider.style.backgroundColor = "gray";
    pointer.style.transform = "translate(0, 0)";
  } else {
    slider.style.backgroundColor = "rgb(32, 78, 244)";
    pointer.style.transform = "translate(60%, 0)";
  }
});
