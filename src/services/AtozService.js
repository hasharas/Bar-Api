// src/services/commonService.js
import { URL } from '../config/const';
import HttpService from './httpService';

class AtozService extends HttpService {

  async fetchCocktailsByLetter(letter) {
    return this.sendRequest({
      method: 'GET',
      url: `${URL.SEARCH_BY_LETTER}${letter}`,
    });
  }

}

const atozService = new AtozService();
export default atozService;
