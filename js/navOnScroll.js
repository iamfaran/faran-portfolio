$(document).ready(function () {
  $(document).scroll(function () {
    const scroll = $(document).scrollTop(); //returns number(distance) from the top
    console.log(scroll);
    if (scroll > 20) {
      $(".nav-btn").css({ "background-color": "black", color: "white" });
    } else {
      $(".nav-btn").css({ "background-color": "transparent", color: "white" });
    }
  });
});
