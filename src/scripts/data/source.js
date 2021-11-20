/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestoSource {
  static async Home() {
    const response = await fetch(API_ENDPOINT.HOME);
    return response.json();
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoSource;
