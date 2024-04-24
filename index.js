const scrin = document.getElementById("scrin");
const ac = document.getElementById("ac");
const ca = document.getElementById("ca");
const az = document.getElementById("az");
const za = document.getElementById("za");
let allCards = []; 

async function logCards() {
    const response = await fetch("https://fakestoreapi.com/products");
    const cards = await response.json();
    allCards = cards;
    renderUi(cards);
    return cards;
}

logCards();

function renderUi(cards) {
    scrin.innerHTML = ""; 
    cards.forEach(card => {
        const cardHtml = `
        <div class="card m-5" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">${card.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${card.price}</li>
          <li class="list-group-item">${card.category}</li>
          <li class="list-group-item">${card.rating.rate}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        `;
        scrin.innerHTML += cardHtml;
    });
}

ac.addEventListener("click",(e)=>{
  acs();
})

function acs() {
  const filteredCards = allCards.sort((a, b) => a.price - b.price);

  renderUi(filteredCards); 
}   

ca.addEventListener("click",(e)=>{
  cas();
})

function cas() {
  const filteredCards = allCards.sort((a, b) => b.price - a.price);

  renderUi(filteredCards); 
}   



az.addEventListener("click",(e)=>{
  azs();
})

function azs() {
  const filteredCards = allCards.sort((a, b) => {
      if (a.title < b.title) {
          return -1;
      } else if (a.title > b.title) {
          return 1;
      } else {
          return 0;
      }
  });
  renderUi(filteredCards);
}



za.addEventListener("click",(e)=>{
  zas();
})

function zas() {
  const filteredCards = allCards.sort((a, b) => {
    if (a.title < b.title) {
        return 1;
    } else if (a.title > b.title) {
        return -1;
    } else {
        return 0;
    }
});
  renderUi(filteredCards); 
}   