/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto-title">${resto.name}</h2>
  <div class="resto-detail">
  <img class="resto-poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Gambar resto" />
  <div class="resto-info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>Rating</h4>
    <p>⭐️ ${resto.rating}</p>
  </div>
  </div>
  <div class="resto-overview">
    <div class="description">
      <h3>Overview</h3><hr>
      <p>${resto.description}</p>
    </div>
    <div class="resto-menu">
    <div class="food">
    <h4>Food</h4><hr>
          ${resto.menus.foods.map((food, i) => `
                <p>${i + 1}) ${food.name}</p>
          `).join('')}
    </div>
    <div class="drink">
    <h4>Drink</h4><hr>
          ${resto.menus.drinks.map((drink, i) => `
                <p>${i + 1}) ${drink.name}</p>
          `).join('')}
    </div>
    </div>
    <h4>Reviews</h4><hr>
    ${resto.customerReviews.map((review) => `
          <div class="card-review">
            <div class="head-card-review">
              <p class="review-name">${review.name}</p>
              <p class="review-date">- ${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `).join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
<div class="card">
<div class="head-card">
    <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Gambar resto">
</div>
<div class="body-card">
    <h2 tabindex="0"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h2>
    <p class="description">${resto.description}</p>
    <p><b>Lokasi : ${resto.city}</b></p>
</div>
</div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="likeButton">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="likeButton">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
