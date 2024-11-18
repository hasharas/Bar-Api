import { URL } from '../config/const';
import HttpService from './httpService';

class ItemDetailsService extends HttpService {
      async fetchCocktailDetails(id) {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.ITEM_DETAILS}${id}`,
            });
      }
}

const itemDetailsService = new ItemDetailsService();
export default itemDetailsService;
