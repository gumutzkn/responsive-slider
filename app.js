"use strict";

let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider__inner");

let pressed = false;
let startx;
let x;

function checkBoundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  // Sağa çekildiğinde left'i 0'la
  if (parseInt(innerSlider.style.left) > 0)
    innerSlider.style.left = "0";

  // inner.right = 1975
  // outer.right = 1050
  if (inner.right < outer.right)
    // Inner.width = 1800
    // outer.width = 900
    innerSlider.style.left = `${outer.width - inner.width}px`;
}

slider.addEventListener("mousedown", (e) => {
  pressed = true;
  e.preventDefault();

  // e.offsetX Mouse'a elementin X kordinati üzerinde nerede basıldığını gösterir
  startx = e.offsetX - innerSlider.offsetLeft;
  //       200 - (-100) = 300
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
  // pressed = false;
});

// Bug Fix
window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;

  x = e.offsetX;
  // başlangıçta iki değer de eşit kaydırmaya başlayınca x 0'a yaklaşır
  innerSlider.style.left = `${x - startx}px`;

  checkBoundary();
});

window.addEventListener("resize", () => {
  innerSlider.style.left = "0";
  checkBoundary();
});
