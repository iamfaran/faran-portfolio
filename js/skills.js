const skills = ["Developer", "Designer"];
let i = 0;
function changeText() {
  if (i < skills.length) {
    document.querySelector(".change-text").innerHTML = skills[i];
    i++;
    setTimeout(changeText, 2000);
  } else {
    i = 0;
    changeText();
  }
}

changeText();
