/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, maincontent }) {
    this._button = button;
    this._drawer = drawer;
    this._maincontent = maincontent;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      maincontent: this._maincontent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._maincontent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
