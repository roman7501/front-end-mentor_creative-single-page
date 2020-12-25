const prevEls = document.querySelectorAll(".prev");
const nextEls = document.querySelectorAll(".next");

const slider = document.getElementById("slider");
const itemsSlider = document.querySelectorAll(".brand");

let index = 0;

function nextPage() {
  if (index < itemsSlider.length) {
    index++;
    slider.scrollBy(100, 0);
  } else {
    index = itemsSlider.length;
  }
  console.log(index);
}
function prevPage() {
  if (index > 0) {
    index--;
    slider.scrollBy(-100, 0);
  } else {
    index = 0;
  }
  console.log(index);
}

prevEls.forEach((prev) => {
  prev.addEventListener("click", () => {
    prevPage();
  });
});
nextEls.forEach((next) => {
  next.addEventListener("click", () => {
    nextPage();
  });
});

console.log(prevEls);
