import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartAddActions'; // Ensure this is correctly imported

const ItemDetails = () => {
      const { id } = useParams();
      const [cocktail, setCocktail] = useState(null);
      const navigate = useNavigate();
      const dispatch = useDispatch();

      useEffect(() => {
            const fetchCocktailDetails = async () => {
                  try {
                        const response = await axios.get(
                              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                        );
                        setCocktail(response.data.drinks[0]);
                  } catch (error) {
                        console.log('Error fetching cocktail details:', error);
                  }
            };

            fetchCocktailDetails();
      }, [id]);

      if (!cocktail) {
            return <p className='text-green-600 flex justify-center font-bold text-xl'>Loading...</p>;
      }

      // Ingredient image URL
      const getIngredientImage = (ingredientName) => {
            return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Medium.png`;
      };

      const handleTagClick = (tag) => {
            navigate(`/Browse-Cocktails/tag/${tag}`);
      };

      const handleAddToCart = () => {
            const cartItem = {
                  name: cocktail.strDrink,
                  image: cocktail.strDrinkThumb,
            };
            dispatch(addToCart(cartItem)); // Dispatch the addToCart action
      };

      return (
            <div className="container max-h-auto h-auto mx-auto p-4 pb-0">
                  <h2 className="text-3xl font-bold mb-4 text-[#009498]">{cocktail.strDrink}</h2>
                  <div className="flex mb-4">
                        <div className="flex-shrink-0 w-1/3 h-full mr-6 rounded shadow-md shadow-slate-400">
                              <img
                                    src={cocktail.strDrinkThumb}
                                    alt={cocktail.strDrink}
                                    className="w-full rounded"
                              />
                        </div>

                        <div className="flex-1 ml-4">
                              <p className="text-lg mb-2 font-bold">
                                    Category: <span className="font-medium text-base text-gray-600">{cocktail.strCategory}</span>
                              </p>
                              <p className="text-lg mb-2 font-bold">
                                    Alcoholic: <span className="font-medium text-base text-gray-600">{cocktail.strAlcoholic}</span>
                              </p>
                              <p className="text-lg mb-4 font-bold">
                                    Glass: <span className="font-medium text-base text-gray-600">{cocktail.strGlass}</span>
                              </p>
                              <p className="text-lg mb-4 font-bold cursor-pointer">
                                    Tags:
                                    {cocktail.strTags &&
                                          cocktail.strTags.split(',').map((tag, index) => (
                                                <span
                                                      key={index}
                                                      onClick={() => handleTagClick(tag.trim())}
                                                      className="font-medium text-base text-white bg-[#009498] px-2 py-1 ml-1 rounded hover:bg-[#36989b]"
                                                >
                                                      {tag.trim()}
                                                </span>
                                          ))}
                              </p>

                              <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
                              <p className="mb-4">
                                    <span className="font-medium text-base text-gray-600">{cocktail.strInstructions}</span>
                              </p>

                              <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
                              <ul className="grid grid-cols-2 gap-4">
                                    {Array.from({ length: 15 }).map((_, i) => {
                                          const ingredient = cocktail[`strIngredient${i + 1}`];
                                          const measure = cocktail[`strMeasure${i + 1}`];
                                          return ingredient ? (
                                                <li key={i} className="text-lg flex items-center cursor-pointer mb-2">
                                                      <img
                                                            src={getIngredientImage(ingredient)}
                                                            alt={ingredient}
                                                            className="w-20 h-16 mr-3 rounded"
                                                      />
                                                      <span className="hover:text-[#009498]">{measure} {ingredient}</span>
                                                </li>
                                          ) : null;
                                    })}
                              </ul>

                              <button
                                    onClick={handleAddToCart}
                                    className="mt-6 bg-[#009498] text-white px-4 py-2 rounded hover:bg-[#36989b]"
                              >
                                    Add to Cart
                              </button>
                        </div>
                  </div>
                  <div className="flex justify-center mt-10 mb-3">
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                              <button
                                    key={letter}
                                    onClick={() => navigate(`/letter/${letter.toLowerCase()}`)}
                                    className="m-1 p-2 text-white bg-[#009498] rounded hover:bg-[#36989b]"
                              >
                                    {letter}
                              </button>
                        ))}
                  </div>
            </div>
      );
};

export default ItemDetails;
