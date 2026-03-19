const galeryImages = document.querySelectorAll(".galerii__list > li");
let galeryclicking = false;

const pastEventImages = document.querySelectorAll(".pastEventImages > li");
let pastEventclicking = false;

galeryImages.forEach((im) => {
  im.addEventListener("click", function (e) {
    galeryImages.forEach((img) => {
      img.classList.remove("imgFullSize");
    });
    galeryclicking = !galeryclicking;
    if (galeryclicking) {
      e.target.classList.add("imgFullSize");
    } else {
      e.target.classList.remove("imgFullSize");
    }
  });
});

pastEventImages.forEach((im) => {
  im.addEventListener("click", function (e) {
    pastEventImages.forEach((img) => {
      img.classList.remove("imgFullSize");
    });
    pastEventclicking = !pastEventclicking;
    if (pastEventclicking) {
      e.target.classList.add("imgFullSize");
    } else {
      e.target.classList.remove("imgFullSize");
    }
  });
});
