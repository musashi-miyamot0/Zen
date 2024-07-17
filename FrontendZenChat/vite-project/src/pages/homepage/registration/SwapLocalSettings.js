export function SwapLocalSettings() {
  let settings = JSON.parse(localStorage.getItem("profileBlock"));
  let profile = document.querySelector(".rightPanel");

  if (settings === null) {
    localStorage.setItem("profileBlock", false);
    profile.classList.toggle("Slide");
  }

  switch (settings) {
    case true:
      profile.classList.toggle("Slide");
      localStorage.setItem("profileBlock", false);
      break;
    case false:
      profile.classList.toggle("Slide");
      localStorage.setItem("profileBlock", true);
      break;
  }
}
