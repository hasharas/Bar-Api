// src/pages/Ingredients/Ingredients.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import IngredientsCart from '../../component/IngredientsCart/IngredientsCart';

const Ingredients = () => {
      const [cartItems, setCartItems] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const [loading, setLoading] = useState(true);
      const itemsPerPage = 4;
      const navigate = useNavigate();

      useEffect(() => {
            const fetchCartItems = async () => {
                  try {
                        setLoading(true);
                        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
                        const items = response.data.drinks.map((ingredient) => ({
                              id: ingredient.strIngredient1,
                              name: ingredient.strIngredient1,
                              imageUrl: `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Medium.png`,
                        }));
                        setCartItems(items);
                  } catch (error) {
                        console.error('Error fetching cart items:', error);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchCartItems();
      }, []);

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = cartItems.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.ceil(cartItems.length / itemsPerPage);

      const handleNextPage = () => {
            if (currentPage < totalPages) {
                  setCurrentPage((prevPage) => prevPage + 1);
            }
      };

      const handlePreviousPage = () => {
            if (currentPage > 1) {
                  setCurrentPage((prevPage) => prevPage - 1);
            }
      };

      // Navigate to the details page with the correct ID
      const handleIngredientClick = async (ingredientName) => {
            try {
                  // Fetch the ingredient details by name to get the ID
                  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`);
                  const ingredient = response.data.ingredients[0];
                  if (ingredient && ingredient.idIngredient) {
                        navigate(`/ingredient/${ingredient.idIngredient}`);
                  } else {
                        console.error('Ingredient ID not found.');
                  }
            } catch (error) {
                  console.error('Error fetching ingredient details:', error);
            }
      };

      return (
            <div
                  className="w-full h-full px-[70px] py-6 px-auto"
                  style={{
                        backgroundImage: 'linear-gradient(to left, black ,white )',
                  }}
            >
                  <hr className="mb-3" />
                  <span className="pl-2 py-4 text-3xl mb-5 font-sans font-bold text-[#009498]">Popular Ingredients</span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                        {currentItems.length > 0 ? (
                              currentItems.map((item) => (
                                    <div key={item.id} onClick={() => handleIngredientClick(item.name)} className="cursor-pointer">
                                          <IngredientsCart name={item.name} imageUrl={item.imageUrl} />
                                    </div>
                              ))
                        ) : (
                              <p>No ingredients available.</p>
                        )}
                  </div>

                  <div className="flex justify-between px-4">
                        <div className="m-2">
                              <button
                                    className="w-[150px] h-[50px] rounded text-white bg-[#009498] disabled:opacity-50"
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                              >
                                    Previous
                              </button>
                        </div>
                        <div>
                              <button
                                    className="w-[150px] h-[50px] rounded text-white bg-[#009498] disabled:opacity-50"
                                    onClick={handleNextPage}
                                    disabled={currentPage >= totalPages}
                              >
                                    Next
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Ingredients;
