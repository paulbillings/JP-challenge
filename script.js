// expand text on homepage
function more() {
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("moreButton");
  let expandScreen = document.getElementById("overflow");
  let expandContainer = document.getElementById("homeContainer");
  let chevronUp = document.getElementById("chevronUp");
  let chevronDown = document.getElementById("chevronDown");

  if (moreText.style.display === "none") {
    // expand overlow to show more text
    btnText.innerText = "Read less";
    moreText.style.display = "inline";
    expandScreen.style.display = "block";
    expandContainer.style.height = "150vh";
    chevronUp.style.display = "inline";
    chevronDown.style.display = "none";
  } else {
    // hide the extra text, hide overlow section
    btnText.innerText = "Read more";
    moreText.style.display = "none";
    expandScreen.style.display = "none";
    expandContainer.style.height = "100vh";
    chevronUp.style.display = "none";
    chevronDown.style.display = "inline";
    window.location.href = "#home";
  }
}

let elem = document.querySelector(".main-carousel");
let flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
});

// slider for section 2
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("assetSlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
