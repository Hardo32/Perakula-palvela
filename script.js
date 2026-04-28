const galeryImages = document.querySelectorAll(".galerii__list > li");
let galeryclicking = false;

const pastEventImages = document.querySelectorAll(".pastEventImgCont");
let pastEventclicking = false;

const kursusImages = document.querySelectorAll(".kursus__list > li");
let kursusclicking = false;

const gal8 = document.getElementById("signature8");

galeryImages.forEach((im) => {
  im.addEventListener("click", function (e) {
    galeryImages.forEach((img) => {
      img.classList.remove("imgFullSize");
    });
    galeryclicking = !galeryclicking;
    if (galeryclicking) {
      e.target.classList.add("imgFullSize");
      gal8.style.opacity = 1;
    } else {
      gal8.style.opacity = 0;
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

kursusImages.forEach((im) => {
  im.addEventListener("click", function (e) {
    kursusImages.forEach((img) => {
      img.classList.remove("imgFullSize");
    });
    kursusclicking = !kursusclicking;
    if (kursusclicking) {
      e.target.classList.add("imgFullSize");
    } else {
      e.target.classList.remove("imgFullSize");
    }
  });
});
