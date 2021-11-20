/* eslint-disable linebreak-style */
import RestoSource from '../../data/source';
import urlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <h2 class="heading_content">Detail Page</h2>
        <div id="likeButtonContainer" class="likeButtonContainer"></div>
        <div class="detail-resto" id="detail-resto">
        
        <div>
      `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const data = await RestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#detail-resto');
    restoContainer.innerHTML += createRestoDetailTemplate(data.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data,
    });
  },
};

export default Detail;
