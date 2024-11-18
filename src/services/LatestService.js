import { URL } from '../config/const';
import HttpService from './httpService';

class LatestService extends HttpService {
      async fetchLatestDrinks(category) {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.FILTER_BY_CATEGORY}${category}`,
            });
      }
}

const latestService = new LatestService();
export default latestService;
