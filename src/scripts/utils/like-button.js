/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import Favorite from '../data/favorite-db';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ LikeButtonContainer, data }) {
    this._likeButtonContainer = LikeButtonContainer;
    this._data = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._data;
    if (await this._isDataExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDataExist(id) {
    const data = await Favorite.getData(id);
    return !!data;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await Favorite.putData(this._data);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await Favorite.deleteData(this._data.id);
      this._renderButton();
    });
  },

};

export default LikeButtonInitiator;
