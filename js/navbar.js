document.querySelector(".nav-btn").addEventListener("click", function (e) {
  if (document.getElementById("nav").classList.contains("nav-overlay-hide")) {
    document.getElementById("nav").classList.remove("nav-overlay-hide");
    document.getElementById("nav").classList.add("nav-overlay");
  }
});

document
  .querySelector(".nav-close-btn")
  .addEventListener("click", function (e) {
    document.getElementById("nav").classList.add("nav-overlay-hide");
  });
