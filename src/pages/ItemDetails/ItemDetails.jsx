import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetails = () => {
      const { id } = useParams();
      const [cocktail, setCocktail] = useState(null);
      const navigate = useNavigate();

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
            return <p>Loading...</p>;
      }

      // Create ingredient image URL
      const getIngredientImage = (ingredientName) => {
            return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Medium.png`;
      };

      return (
            <div className="container max-h-auto h-auto  mx-auto p-4 pb-0">
                  <h2 className="text-3xl font-bold mb-4 text-[#009498]">{cocktail.strDrink}</h2>
                  <div className="flex mb-4">
                        {/* Main image */}
                        <div className="flex-shrink-0 w-1/3 mr-6 shadow-2xl shadow-slate-500">
                              <img
                                    src={cocktail.strDrinkThumb}
                                    alt={cocktail.strDrink}
                                    className="w-full rounded"
                              />
                        </div>

                        {/* Cocktail details and ingredients */}
                        <div className="flex-1 ml-4">
                              <p className="text-lg mb-2 font-bold">Category : <span className='font-medium text-base text-gray-600'> {cocktail.strCategory}</span></p>

                              <p className="text-lg mb-2 font-bold">Alcoholic :<span className='font-medium text-base text-gray-600'> {cocktail.strAlcoholic}</span></p>
                              <p className="text-lg mb-4 font-bold">Glass :<span className='font-medium text-base text-gray-600'> {cocktail.strGlass}</span></p>
                              <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
                              <p className="mb-4"><span className='font-medium text-base text-gray-600'>{cocktail.strInstructions}</span></p>

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
                                                            className="w-14 h-14 mr-3 rounded"
                                                      />
                                                      <span className='hover:text-[#009498]'>{measure} {ingredient}</span>
                                                </li>
                                          ) : null;
                                    })}
                              </ul>
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
