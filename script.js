const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.background = "#ffffff";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "0";
    nav.style.width = "100%";
    nav.style.padding = "20px";
  }
});
