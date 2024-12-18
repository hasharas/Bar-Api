import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartAddActions';
import randomIngredientDetailService from '../../services/RandomIngredientDetailService';

const RandomIngredientDetails = () => {
      const { ingredientId } = useParams();
      const [ingredientDetails, setIngredientDetails] = useState(null);
      const [loading, setLoading] = useState(true);
      const navigate = useNavigate();
      const dispatch = useDispatch();

      useEffect(() => {
            const fetchIngredientDetails = async () => {
                  try {
                        setLoading(true);
                        const response = await randomIngredientDetailService.fetchIngredientDetails(ingredientId); // Use the service
                        console.log(response);
                        setIngredientDetails(response.ingredients[0]);
                  } catch (error) {
                        console.error('Error fetching ingredient details:', error);
                  } finally {
                        setLoading(false);
                  }
            };
            fetchIngredientDetails();
      }, [ingredientId]);

      if (loading) return <div ><p className='text-green-600 flex justify-center font-bold text-xl'>Loading...</p></div>;

      if (!ingredientDetails) return <div>No ingredient details available.</div>;

      const ingredientImageUrl = `https://www.thecocktaildb.com/images/ingredients/${ingredientDetails.strIngredient}-Medium.png`;

      const handleLetterClick = (letter) => {
            navigate(`/ingredients/${letter}`);
      };

      const handleAddToCart = () => {
            const cartItem = {
                  name: ingredientDetails.strIngredient,
                  image: ingredientImageUrl,
            };
            dispatch(addToCart(cartItem)); // Dispatch the addToCart action
      };

      return (
            <div className="container w-full mx-[60px] p-6">
                  <h2 className="text-3xl font-bold mb-4 text-[#009498]">{ingredientDetails.strIngredient}</h2>

                  <div className="flex mb-6">
                        <div className="flex-shrink-0 w-[500px] mr-6 shadow-md rounded shadow-slate-400">
                              <img
                                    src={ingredientImageUrl}
                                    alt={ingredientDetails.strIngredient}
                                    className="w-full rounded shadow-md"
                              />
                        </div>

                        <div className="flex-1 ml-3">
                              <span className="text-lg mb-2 font-bold">Drinks :</span>
                              <div className="mb-4">
                                    {ingredientDetails.strDrink ? (
                                          <div className="flex items-center mb-4">
                                                <img
                                                      src={ingredientDetails.strDrinkThumb}
                                                      alt={ingredientDetails.strDrink}
                                                      className="w-[70px] h-[80px] rounded-lg mr-4"
                                                />
                                                <p className="text-lg font-medium">{ingredientDetails.strDrink}</p>
                                          </div>
                                    ) : (
                                          <p className="font-medium text-base pl-3 text-gray-600">No drinks found for this ingredient.</p>
                                    )}
                              </div>
                              <p className="text-lg mb-2 font-bold">Description :
                                    <span className="font-medium text-base text-gray-600 pl-3 truncate-description">
                                          {ingredientDetails.strDescription || 'No description available.'}
                                    </span>
                              </p>
                              <p className="text-lg mb-2 font-bold">Type : <span className="font-medium text-base text-gray-600">{ingredientDetails.strType || 'N/A'}</span></p>
                              <p className="text-lg mb-2 font-bold">Alcoholic : <span className="font-medium text-base text-gray-600">{ingredientDetails.strAlcohol || 'No'}</span></p>
                              <p className="text-lg mb-2 font-bold">ABV : <span className="font-medium text-base text-gray-600">{ingredientDetails.strABV || 'N/A'}</span></p>
                              <button
                                    onClick={handleAddToCart}
                                    className="mt-6 bg-[#009498] text-white px-4 py-2 rounded hover:bg-[#36989b]"
                              >
                                    Add to Cart
                              </button>
                        </div>

                  </div>

                  {/* A-Z  */}
                  <div className="flex justify-center mt-10 mb-3">
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                              <button
                                    key={letter}
                                    onClick={() => handleLetterClick(letter.toLowerCase())}
                                    className="m-1 p-2 text-white bg-[#009498] rounded hover:bg-[#36989b]"
                              >
                                    {letter}
                              </button>
                        ))}
                  </div>
            </div>
      );
};

export default RandomIngredientDetails;
