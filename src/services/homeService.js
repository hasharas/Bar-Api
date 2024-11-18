// import HttpService from './httpService';
// import { URL } from '../config/const';

// class HomeService extends HttpService {
//       // Fetch total drinks
//       async getTotalDrinks() {
//             let totalDrinkCount = 0;
//             for (let letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
//                   const response = await this.sendRequest({
//                         method: 'GET',
//                         url: `${URL.COCKTAILS_API}?f=${letter}`,
//                   });
//                   totalDrinkCount += response.data.drinks ? response.data.drinks.length : 0;
//             }
//             return totalDrinkCount;
//       }

//       // Fetch total ingredients
//       async getTotalIngredients() {
//             const response = await this.sendRequest({
//                   method: 'GET',
//                   url: `${URL.COCKTAILS_API}list.php?i=list`,
//             });
//             return response.data.drinks.length;
//       }

//       // Fetch cocktails on search query
//       async fetchCocktailsBySearch(searchQuery) {
//             return this.sendRequest({
//                   method: 'GET',
//                   url: `${URL.COCKTAILS_API}search.php?s=${searchQuery}`,
//             });
//       }
// }

// const homeService = new HomeService();
// export default homeService;
