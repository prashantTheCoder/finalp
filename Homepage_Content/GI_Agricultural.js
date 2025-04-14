const productNames = [
  "Bhagalpuriya Zardalu Aam",
  "Shahi Litchi",
  "Magahi Paan",
  "Mithila Makhana",
  "Silao Khaja",
  "Katarni Rice",
 
];

let charIndex = 0;
let productIndex = 0;
let isDeleting = false;
const speed = 100;
const pause = 1500;

function loopTypewriter() {
  const currentProduct = productNames[productIndex];
  const display = document.getElementById("typewriter-text");

  if (!isDeleting) {
      display.textContent = currentProduct.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentProduct.length) {
          isDeleting = true;
          setTimeout(loopTypewriter, pause);
          return;
      }
  } else {
      display.textContent = currentProduct.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
          isDeleting = false;
          productIndex = (productIndex + 1) % productNames.length;
      }
  }

  setTimeout(loopTypewriter, speed);
}

window.onload = loopTypewriter;


