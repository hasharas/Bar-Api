import { URL } from '../config/const';
import HttpService from './httpService';

class RandomIngredientsService extends HttpService {
      async fetchIngredients(ingredients) {
            const ingredientPromises = ingredients.map((ingredient) =>
                  this.sendRequest({
                        method: 'GET',
                        url: `${URL.SEARCH_BY_INGREDIENT}${ingredient}`,
                  })
            );

            return Promise.all(ingredientPromises);
      }
}

const randomIngredientsService = new RandomIngredientsService();
export default randomIngredientsService;
