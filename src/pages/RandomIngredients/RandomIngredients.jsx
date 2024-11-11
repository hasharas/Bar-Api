import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IngredientsCart from '../../component/IngredientsCart/IngredientsCart';


const RandomIngredients = () => {
      const [cartItems, setCartItems] = useState([]);

      useEffect(() => {
            const fetchCartItems = async () => {
                  try {
                        // ingredients to fetch
                        const ingredients = ['Grenadine', 'Vanilla', 'Tang', 'Cocktail Onion'];
                        const ingredientPromises = ingredients.map((ingredient) =>
                              axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`)
                        );

                        const responses = await Promise.all(ingredientPromises);

                        const items = responses.map((response, index) => {
                              const ingredient = response.data.ingredients[0];
                              return {
                                    id: ingredient.idIngredient,
                                    name: ingredient.strIngredient,
                                    type: ingredient.strType || 'Unknown',
                                    imageUrl: `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`,
                              };
                        });

                        setCartItems(items);
                  } catch (error) {
                        console.error("Error fetching cart items:", error);
                  }
            };

            fetchCartItems();
      }, []);

      return (
            <div className='w-full h-full px-[70px] py-6 px-auto'
                  style={{
                        backgroundImage: "linear-gradient(to left, black ,white )",
                  }}>
                  <hr className='mb-3' />
                  <span className='p-4 text-3xl mb-5 font-sans font-bold text-[#009498]'>Random Ingredients</span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                        {cartItems.map((item) => (
                              <IngredientsCart
                                    key={item.id}
                                    name={item.name}
                                    imageUrl={item.imageUrl}
                              />
                        ))}
                  </div>
            </div>
      );
};

export default RandomIngredients;
