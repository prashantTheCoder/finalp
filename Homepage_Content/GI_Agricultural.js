const productNames = [
  "Bhagalpuriya Zardalu Aam",
  "Shahi Litchi",
  "Magahi Paan",
  "Mithila Makhana",
  "Silao Khaja",
  "Katarni Rice",
  "Madhubani Painting"
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


// Example data: Product list with names and descriptions
const products = [
  { name: "Bhagalpuriya Zardalu Aam", description: "A famous mango from Bhagalpur." },
  { name: "Shahi Litchi", description: "Delicious Litchi from Bihar." },
  { name: "Magahi Paan", description: "Traditional paan from Bihar." },
  { name: "Mithila Makhana", description: "Bihar's famous Makhana." },
  { name: "Silao Khaja", description: "Traditional sweet from Bihar." },
  { name: "Katarni Rice", description: "Special rice from Bihar." },
  {name:"Madhubani Painting",description:"A famous Painting of Bihar"}
];

// Function to search and display filtered products dynamically
function searchProducts() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.cards');

  cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      if (title.includes(query)) {
          card.style.display = 'block'; // show if match found
      } else {
          card.style.display = 'none'; // hide otherwise
      }
  });
}
