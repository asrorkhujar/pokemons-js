const elForm = document.querySelector('.js-pokemon-search-form');
const elPokemonList = document.querySelector('.pokemons__list');

//Formani ketib qolishini oldini olamiz
elForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

for (let pokemon of pokemons) {
  //CREATE ELEMENTS
  let newItemPokemon = document.createElement('li');
  let newCard = document.createElement('div');
  let newImgWrapper = document.createElement('div');
  let newImg = document.createElement('img');
  let newCardBody = document.createElement('div');
  let newCardContentWrapper = document.createElement('div');
  let newCardTopInfoWrapper = document.createElement('div');
  let newCardTitle = document.createElement('h5');
  let newCardType = document.createElement('p');
  let newCardLikeBtn = document.createElement('button');
  let newHeartImg = document.createElement('img');
  let newCardBottomInfoWrapper = document.createElement('div');
  let newCardWeight = document.createElement('p');
  let newCardAge = document.createElement('p');
  let newCardWeaknesses = document.createElement('p');

  //SET ATTRIBUTE
  newItemPokemon.setAttribute('class', 'pokemons__item col-sm-6 col-md-3 mb-5');
  newCard.setAttribute('class', 'card pokemons__card pt-3 border-2 border-dark h-100');
  newCard.setAttribute('style', 'border-radius: 20px; width: 18rem;');
  newImgWrapper.setAttribute('class', 'pb-5 mx-auto');
  newImg.setAttribute('class', 'card-img-top img-fluid');
  newImg.setAttribute('src', pokemon.img);
  newCardBody.setAttribute('class', 'card-body px-4 border-top border-2 border-dark d-flex flex-column');
  newCardContentWrapper.setAttribute('class', 'd-flex justify-content-between align-items-start');
  newCardTitle.setAttribute('class', 'card-title h4 fw-bold mb-0');
  newCardLikeBtn.setAttribute('class', 'bg-transparent border-0');
  newCardLikeBtn.setAttribute('type', 'button');
  newHeartImg.setAttribute('src', '/img/heart.svg');
  newHeartImg.setAttribute('width', '30');
  newHeartImg.setAttribute('height', '30');
  newCardBottomInfoWrapper.setAttribute('class', 'd-flex flex-column mt-auto');
  newCardWeight.setAttribute('class', 'pokemons__weight h5 fw-bold me-3');
  newCardAge.setAttribute('class', 'pokemons__age h5 fw-bold');
  newCardWeaknesses.setAttribute('class', 'pokemons__weaknesses fw-bold');

  //TEXT CONTENT
  newCardTitle.textContent = pokemon.name;
  newCardType.textContent = pokemon.type.join(', ');
  newCardWeight.textContent = pokemon.weight;
  newCardAge.textContent = pokemon.candy_count ? `${pokemon.candy_count} age` : 'Age is unknown';
  newCardWeaknesses.textContent = pokemon.weaknesses.join(', ');

  //APPEND CHILD
  elPokemonList.appendChild(newItemPokemon);
  newItemPokemon.appendChild(newCard);
  newCard.appendChild(newImgWrapper);
  newImgWrapper.appendChild(newImg);
  newCard.appendChild(newCardBody);
  newCardBody.appendChild(newCardContentWrapper);
  newCardContentWrapper.appendChild(newCardTopInfoWrapper);
  newCardTopInfoWrapper.appendChild(newCardTitle);
  newCardTopInfoWrapper.appendChild(newCardType);
  newCardContentWrapper.appendChild(newCardLikeBtn);
  newCardLikeBtn.appendChild(newHeartImg);
  newCardBody.appendChild(newCardBottomInfoWrapper);
  newCardBottomInfoWrapper.appendChild(newCardWeight);
  newCardBottomInfoWrapper.appendChild(newCardAge);
  newCardBottomInfoWrapper.appendChild(newCardWeaknesses);

}