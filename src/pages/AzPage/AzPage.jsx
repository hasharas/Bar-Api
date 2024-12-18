import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import atozService from '../../services/AtozService';

const AzPage = () => {
      const { letter } = useParams();
      const [cocktails, setCocktails] = useState([]);
      const navigate = useNavigate();

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await atozService.fetchCocktailsByLetter(letter);
                        const drinks = response?.drinks || [];
                        setCocktails(drinks);
                  } catch (error) {
                        console.error('Error fetching cocktails:', error);
                  }
            };
            fetchData();
      }, [letter]);

      const handleCocktailClick = (id) => {
            navigate(`/cocktail/${id}`);
      };

      return (
            <div className="px-[60px] h-auto">
                  <h2 className="py-4 mt-2 text-3xl font-bold mb-4 text-[#009498]">
                        Cocktails Starting with "{letter.toUpperCase()}"
                  </h2>

                  {cocktails.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 mt-4">
                              {cocktails.map((drink) => (
                                    <div
                                          key={drink.idDrink}
                                          className="bg-white h-auto rounded-xl shadow-xl cursor-pointer"
                                          onClick={() => handleCocktailClick(drink.idDrink)}
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
                  ) : (
                        <p className="text-center text-gray-500 mt-8">
                              No cocktails found for the letter "{letter.toUpperCase()}". Try another letter.
                        </p>
                  )}

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
