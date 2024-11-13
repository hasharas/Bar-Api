import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AzPage = () => {
      const { letter } = useParams(); // Get selected letter from URL
      const [cocktails, setCocktails] = useState([]);
      const navigate = useNavigate();

      useEffect(() => {
            const fetchCocktails = async () => {
                  try {
                        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
                        setCocktails(response.data.drinks || []);
                  } catch (error) {
                        console.error("Error fetching cocktails:", error);
                  }
            };
            fetchCocktails();
      }, [letter]);

      const handleCocktailClick = (id) => {
            navigate(`/cocktail/${id}`);
      };

      return (
            <div className="px-[60px] h-auto">
                  <h2 className="py-4 mt-2 text-3xl font-bold mb-4 text-[#009498]">
                        Cocktails Starting with "{letter.toUpperCase()}"
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 mt-4">
                        {cocktails.map((drink) => (
                              <div
                                    key={drink.idDrink}
                                    className="bg-white h-auto rounded-xl shadow-xl cursor-pointer"
                                    onClick={() => handleCocktailClick(drink.idDrink)} //navigation route to single item page 
                              >
                                    <img
                                          src={drink.strDrinkThumb}
                                          alt={drink.strDrink}
                                          className="w-full h-auto mb-4 rounded-t-xl"
                                    />
                                    <span className="font-semibold w-full px-5 pb-4 block">{drink.strDrink}</span>
                              </div>
                        ))}
                  </div>


                  <div className="flex justify-center mt-10 mb-3">
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((char) => (
                              <button
                                    key={char}
                                    onClick={() => navigate(`/letter/${char.toLowerCase()}`)}
                                    className="m-1 p-2 text-white bg-[#009498] rounded hover:bg-[#36989b]"
                              >
                                    {char}
                              </button>
                        ))}
                  </div>
            </div>
      );
};

export default AzPage;
