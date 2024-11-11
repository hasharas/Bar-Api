// LetterCocktails.js
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

      return (
            <div className="px-[50px] h-fit">
                  <h2 className="text-2xl font-bold">Cocktails Starting with "{letter.toUpperCase()}"</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                        {cocktails.map((drink) => (
                              <div key={drink.idDrink} className="bg-white rounded-xl shadow">
                                    <span className="font-semibold p-3">{drink.strDrink}</span>
                                    <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-auto mt-2 rounded-b-xl" />
                              </div>
                        ))}
                  </div>

                  {/* A-Z Navigation at the bottom */}
                  <div className="flex justify-center mt-10">
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
