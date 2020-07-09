let isFlipped = true;
const aboutSecCard = document.querySelector(".about-sec-card");
const imgCard = document.querySelector(".coding-img-card");
aboutSecCard.addEventListener("click", function () {
  if (isFlipped) {
    imgCard.style.transform = "rotateY(180deg)";
    isFlipped = false;
  } else {
    imgCard.style.transform = "rotateY(0deg)";
    isFlipped = true;
  }
});
