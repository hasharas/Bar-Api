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
                        <div className="flex-shrink-0 w-[600px] mr-6">
                              <img
                                    src={ingredientImageUrl}
                                    alt={ingredientDetails.strIngredient}
                                    className="w-full rounded-lg shadow-md"
                              />
                        </div>

                        {/* Ingredient details */}
                        <div className="flex-1 ml-3">
                              <p className="text-lg mb-2 font-bold">ID: <span className="font-medium text-base text-gray-600">{ingredientDetails.idIngredient}</span></p>
                              <p className="text-lg mb-2 font-bold">Description: <span className="font-medium text-base text-gray-600">{ingredientDetails.strDescription || 'No description available.'}</span></p>
                              <p className="text-lg mb-2 font-bold">Type: <span className="font-medium text-base text-gray-600">{ingredientDetails.strType || 'N/A'}</span></p>
                              <p className="text-lg mb-2 font-bold">Alcoholic: <span className="font-medium text-base text-gray-600">{ingredientDetails.strAlcohol || 'No'}</span></p>
                              <p className="text-lg mb-2 font-bold">ABV: <span className="font-medium text-base text-gray-600">{ingredientDetails.strABV || 'N/A'}</span></p>
                        </div>
                  </div>

                  {/* A-Z Buttons */}
                  <div className="flex justify-center mt-6 mb-4">
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
