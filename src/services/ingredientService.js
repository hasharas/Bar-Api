import { URL } from '../config/const';
import HttpService from './httpService';

class IngredientService extends HttpService {
      async fetchAllIngredients() {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.BASE}/list.php?i=list`,
            });
      }

      async fetchIngredientDetails(ingredientName) {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.BASE}/search.php?i=${ingredientName}`,
            });
      }
}

const ingredientService = new IngredientService();
export default ingredientService;
