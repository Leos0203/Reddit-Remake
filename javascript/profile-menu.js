const profileButton = document.getElementById("navbar-profile-menu-button");
let profileMenu = document.getElementById("profile-menu");

profileButton.addEventListener("click", () => {
  if (profileMenu.style.visibility != "visible") {
    profileMenu.style.visibility = "visible";
  } else {
    profileMenu.style.visibility = "hidden";
  }
});

const clickOn = (element) => {
  document.addEventListener("click", (e) => {
    if (element.contains(e.target)) {
      return true;
    }
  });
  return false;
};
