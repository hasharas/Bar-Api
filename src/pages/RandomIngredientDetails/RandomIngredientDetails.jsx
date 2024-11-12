import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RandomIngredientDetails = () => {
      const { ingredientId } = useParams(); // Get ingredient ID from route
      const [ingredientDetails, setIngredientDetails] = useState(null);
      const [loading, setLoading] = useState(true);
      const navigate = useNavigate();

      useEffect(() => {
            const fetchIngredientDetails = async () => {
                  try {
                        setLoading(true);
                        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${ingredientId}`);

                        console.log(response.data);  // Log the API response to inspect its structure
                        setIngredientDetails(response.data.ingredients[0]);
                  } catch (error) {
                        console.error('Error fetching ingredient details:', error);
                  } finally {
                        setLoading(false);
                  }
            };
            fetchIngredientDetails();
      }, [ingredientId]);

      if (loading) return <div>Loading...</div>;

      if (!ingredientDetails) return <div>No ingredient details available.</div>;

      const ingredientImageUrl = `https://www.thecocktaildb.com/images/ingredients/${ingredientDetails.strIngredient}-Medium.png`;

      const handleLetterClick = (letter) => {
            // Navigate to ingredient list page with the selected letter
            navigate(`/ingredients/${letter}`);
      };

      return (
            <div className="container w-full mx-[60px] p-6">
                  <h2 className="text-3xl font-bold mb-4 text-[#009498]">{ingredientDetails.strIngredient}</h2>

                  <div className="flex mb-6">
                        {/* Ingredient Image */}
                        <div className="flex-shrink-0 w-[600px] mr-6 shadow-xl rounded-lg shadow-slate-500">
                              <img
                                    src={ingredientImageUrl}
                                    alt={ingredientDetails.strIngredient}
                                    className="w-full rounded-lg shadow-md"
                              />
                        </div>

                        {/* Ingredient details */}
                        <div className="flex-1 ml-3">
                              <span className="text-lg mb-2 font-bold">Drinks :</span>
                              <div className="mb-4">
                                    {/* Add this block to check if drinks are available */}
                                    {ingredientDetails.strDrink ? (
                                          <div className="flex items-center mb-4">
                                                {/* Display drink image */}
                                                <img
                                                      src={ingredientDetails.strDrinkThumb}
                                                      alt={ingredientDetails.strDrink}
                                                      className="w-[100px] h-[100px] rounded-lg mr-4"
                                                />
                                                <p className="text-lg font-medium">{ingredientDetails.strDrink}</p>
                                          </div>
                                    ) : (
                                          <p>No drinks found for this ingredient.</p>
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
                        </div>
                  </div>

                  {/* A-Z Buttons */}
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
