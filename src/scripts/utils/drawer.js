/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

const DrawerInitiator = {
  init({ button, drawer, maincontent }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    maincontent.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
