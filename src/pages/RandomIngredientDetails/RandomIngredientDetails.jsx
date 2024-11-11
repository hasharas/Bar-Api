import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RandomIngredientDetails = () => {
      const { id } = useParams();
      const [ingredient, setIngredient] = useState(null);
      const navigate = useNavigate();

      useEffect(() => {
            const fetchIngredientDetails = async () => {
                  try {
                        const response = await axios.get(
                              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`
                        );
                        // Assuming the response is structured like the one you provided
                        setIngredient(response.data.ingredients[0]);
                  } catch (error) {
                        console.log('Error fetching ingredient details:', error);
                  }
            };

            fetchIngredientDetails();
      }, [id]);

      if (!ingredient) {
            return <p>Loading...</p>;
      }

      // Create ingredient image URL
      const getIngredientImage = (ingredientName) => {
            return `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Medium.png`;
      };

      return (
            <div className="container h-auto mx-auto p-4 pb-0">
                  <h2 className="text-3xl font-bold mb-4">{ingredient.strIngredient}</h2>
                  <div className="flex mb-4">
                        {/* Ingredient image */}
                        <div className="flex-shrink-0 w-1/3 mr-6">
                              <img
                                    src={getIngredientImage(ingredient.strIngredient)}
                                    alt={ingredient.strIngredient}
                                    className="w-full rounded"
                              />
                        </div>

                        {/* Ingredient details */}
                        <div className="flex-1 ml-4">
                              <p className="text-lg mb-2 font-bold">Type : <span className='font-medium text-base text-gray-600'>{ingredient.strType}</span></p>
                              <p className="text-lg mb-2 font-bold">Alcoholic : <span className='font-medium text-base text-gray-600'>{ingredient.strAlcohol}</span></p>
                              <p className="text-lg mb-4 font-bold">Description : <span className='font-medium text-base text-gray-600'>{ingredient.strDescription}</span></p>
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

export default RandomIngredientDetails;
