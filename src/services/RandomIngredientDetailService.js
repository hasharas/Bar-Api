import { URL } from '../config/const';
import HttpService from './httpService';

class RandomIngredientDetailService extends HttpService {
      async fetchIngredientDetails(ingredientId) {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.LOOKUP_INGREDIENT}${ingredientId}`,
            });
      }
}

const randomIngredientDetailService = new RandomIngredientDetailService();
export default randomIngredientDetailService;
