const pages = document.querySelectorAll(".page");
let current = 0;

// sound
const flipSound = new Audio("sounds/flip.mp3");
flipSound.volume = 0.4;

// z-index order for unflipped pages
pages.forEach((page, i) => {
  page.style.zIndex = pages.length - i;
});

document.getElementById("next").addEventListener("click", () => {
  if (current < pages.length) {
    pages[current].classList.add("flipped");
    pages[current].style.zIndex = current + 1; 
    flipSound.currentTime = 0;
    flipSound.play();
    current++;
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (current > 0) {
    current--;
    pages[current].classList.remove("flipped");
    pages[current].style.zIndex = pages.length - current; 
    flipSound.currentTime = 0;
    flipSound.play();
  }
});
