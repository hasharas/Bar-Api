import { URL } from '../config/const';
import HttpService from './httpService';

class RandomDrinksService extends HttpService {
      async fetchDrinksByCategory(category) {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.FILTER_BY_CATEGORY}${category}`,
            });
      }
}

const randomDrinksService = new RandomDrinksService();
export default randomDrinksService;
