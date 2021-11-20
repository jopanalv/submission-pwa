/* eslint-disable linebreak-style */
import RestoSource from '../../data/source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <h2 class="heading_content">Daftar Restoran</h2>
        <div class="list" id="list">
            
        </div>
          `;
  },

  async afterRender() {
    const data = await RestoSource.Home();
    const restoContainer = document.querySelector('#list');
    data.restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
