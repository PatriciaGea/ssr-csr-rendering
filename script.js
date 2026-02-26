const products = [
  {
    name: "ILUSTRATION: Nena Star",
    price: "200 kr",
    thumb: "images/pequeno.png",
    full: "images/grande.png",
    thumbWidth: "300px",
    thumbHeight: "300px"
  },

  {
    name: "ILUSTRATION: Tucan in Portugal",
    price: "300 kr",
    thumb: "images/pequenotuca.png",
    full: "images/grandetuca.png",
    thumbWidth: "300px",
    thumbHeight: "300px"
  },
  {
    name: "ILUSTRATION: Nena Star",
    price: "200 kr",
    thumb: "images/pequeno.png",
    full: "images/grande.png",
    thumbWidth: "300px",
    thumbHeight: "300px"
  },

  {
    name: "ILUSTRATION: Tucan in Portugal",
    price: "300 kr",
    thumb: "images/pequenotuca.png",
    full: "images/grandetuca.png",
    thumbWidth: "300px",
    thumbHeight: "300px"
  },
   {
    name: "ILUSTRATION: Nena Star",
    price: "200 kr",
    thumb: "images/pequeno.png",
    full: "images/grande.png",
    thumbWidth: "300px",
    thumbHeight: "300px"
  },

  {
    name: "ILUSTRATION: Tucan in Portugal",
    price: "300 kr",
    thumb: "images/pequenotuca.png",
    full: "images/grandetuca.png",
    thumbWidth: "300px",
    thumbHeight: "300px"
  },
];

const container = document.getElementById("products");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.thumb}" 
         class="thumb"
         data-full="${product.full}"
         alt="Illustrative image of a artistic hand-drawn named ${product.name} ">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button>Buy</button>
  `;
  const img = card.querySelector(".thumb");
  img.style.width = product.thumbWidth;
  img.style.height = product.thumbHeight;

  container.appendChild(card);
});


// create back button dynamically on CSR page
if (window.location.pathname.endsWith('csr.html')) {
  const h1 = document.querySelector('h1');
  if (h1) {
    const wrapper = document.createElement('div');
    wrapper.className = 'center';
    const backLink = document.createElement('a');
    backLink.href = 'index.html';
    backLink.className = 'btn';
    backLink.textContent = 'Back';
    backLink.alt = 'button back to home';
    wrapper.appendChild(backLink);
    h1.after(wrapper);
  }
}

// Popup logic
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("thumb")) {
    popupImg.src = e.target.dataset.full;
    popup.classList.remove("hidden");
  }
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});