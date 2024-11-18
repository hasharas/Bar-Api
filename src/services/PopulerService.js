import { URL } from '../config/const';
import HttpService from './httpService';

class PopulerService extends HttpService {
      async fetchPopulerByLetter(letter) {
            return this.sendRequest({
                  method: 'GET',
                  url: `${URL.SEARCH_BY_LETTER}${letter}`,
            });
      }
}

const populerService = new PopulerService();
export default populerService;
