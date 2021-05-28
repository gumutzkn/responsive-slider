"use strict";

let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider__inner");

let pressed = false;
let startToSlide, x;

slider.addEventListener("mousedown", (e) => {
  e.preventDefault();

  pressed = true;

  startToSlide = e.offsetX - innerSlider.offsetLeft;
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;

  x = e.offsetX;

  innerSlider.style.left = `${x - startToSlide}px`;

  checkBoundary();
});

window.addEventListener("resize", () => {
  innerSlider.style.left = "0";
  checkBoundary();
});

// infinity, 3lü, yarıda kalmaması

function checkBoundary() {
  const inner = innerSlider.getBoundingClientRect();
  const outer = slider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0)
    innerSlider.style.left = "0";

  if (inner.right < outer.right)
    innerSlider.style.left = `${outer.width - inner.width}px`;
}
