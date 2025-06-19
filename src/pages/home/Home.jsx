import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Popular from '../Popular/Popular';
import Ingredients from '../Ingredients/Ingredients';
import axios from 'axios';
import Latest from '../Latest/Latest';
import RandomIngredients from '../RandomIngredients/RandomIngredients';
import RandomDrinks from '../RandomDrinks/RandomDrinks';

const Home = () => {
      const [searchQuery, setSearchQuery] = useState('');
      const [cocktails, setCocktails] = useState([]);
      const [totalDrinks, setTotalDrinks] = useState(0);
      const [totalIngredients, setTotalIngredients] = useState(0);
      const [searchPerformed, setSearchPerformed] = useState(false);
      const navigate = useNavigate();

      useEffect(() => {
            const fetchTotals = async () => {
                  try {

                        let totalDrinkCount = 0;
                        for (let letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
                              const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
                              totalDrinkCount += response.data.drinks ? response.data.drinks.length : 0;
                        }
                        setTotalDrinks(totalDrinkCount);

                        // Fetching total ingredients
                        const ingredientsResponse = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
                        setTotalIngredients(ingredientsResponse.data.drinks ? ingredientsResponse.data.drinks.length : 0);
                  } catch (error) {
                        console.error("Error fetching totals:", error);
                  }
            };

            fetchTotals();
      }, []);

      const handleSearch = async () => {
            if (searchQuery.trim() === '') return;
            try {
                  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`);
                  const data = response.data;
                  setCocktails(data.drinks || []);
                  setSearchPerformed(true);
                  navigate('/Browse-Cocktails', { state: { cocktails: data.drinks || [] } });
            } catch (error) {
                  console.error("Error fetching cocktails:", error);
                  setCocktails([]);
                  setSearchPerformed(true);
            }
      };

      return (
            <div>
                  {/* Hero Section */}
                  <div
                        className="relative w-full min-h-screen flex items-center justify-center py-2
                           bg-gradient-to-br from-green-800 via-zinc-900 to-zinc-500
                           animate-gradient-shift overflow-hidden"
                  >
                        <div className="absolute inset-0 z-0"></div>

                        <style>{`
                    /* Keyframes for a subtle gradient shift animation */
                    @keyframes gradient-shift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .animate-gradient-shift {
                        background-size: 200% 200%; /* Make background larger for animation */
                        animation: gradient-shift 15s ease infinite; /* Apply the animation */
                    }
                    /* Keyframes for a subtle fade-in-up animation for text elements */
                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out forwards;
                    }
                    .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
                    .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
                    .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
                    .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
                    .animate-fade-in-up.delay-500 { animation-delay: 0.5s; }
                `}</style>

                        <div className="relative z-10 w-full max-w-7xl mx-auto text-white flex flex-col lg:flex-row items-center justify-between py-6 px-6 sm:px-10 lg:px-16 gap-10">
                              <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
                                    <span className="font-extrabold font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight text-teal-300 mb-4 drop-shadow-lg animate-fade-in-up">
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans mb-4 text-white animate-fade-in-up delay-100">
                                          Signature Cocktails
                                    </h1>
                                    <p className="mt-4 text-lg sm:text-xl text-indigo-200 font-sans max-w-lg animate-fade-in-up delay-200">
                                          Explore a curated selection of refreshing and tantalizing cocktails, designed to suit every taste.
                                    </p>
                                    <Link to="#" className="text-teal-300 hover:text-teal-500 mt-6 text-xl font-semibold transition duration-300 animate-fade-in-up delay-300">
                                          Learn more...
                                    </Link>
                              </div>


                              <div className="flex flex-col items-center lg:items-end w-full lg:w-1/2 mt-10 lg:mt-0">

                                    <div className="w-full max-w-md flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up delay-400">
                                          <input
                                                type="search"
                                                placeholder="Search for a cocktail..."
                                                className="w-full flex-grow p-4 border border-transparent rounded-lg text-lg text-gray-900 placeholder-gray-500
                                           focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 shadow-xl
                                           bg-white bg-opacity-90 backdrop-blur-sm"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                          />
                                          <button
                                                onClick={handleSearch}
                                                className="bg-teal-500 w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white rounded-lg text-center
                                           shadow-xl hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                                           transition duration-300 transform hover:scale-105"
                                          >
                                                Search
                                          </button>
                                    </div>

                                    {/* Stats Section */}
                                    <div className="flex flex-col gap-6 w-full max-w-md mt-6 animate-fade-in-up delay-500">
                                          <span className="text-xl sm:text-2xl font-semibold text-white py-3 px-6 rounded-full
                                           bg-gradient-to-r from-teal-500 to-emerald-600 shadow-lg text-center
                                           transform hover:scale-105 transition duration-300">
                                                Total Drinks: {totalDrinks}
                                          </span>
                                          <span className="text-xl sm:text-2xl font-semibold text-white py-3 px-6 rounded-full
                                           bg-gradient-to-r from-emerald-600 to-cyan-700 shadow-lg text-center
                                           transform hover:scale-105 transition duration-300">
                                                Total Ingredients: {totalIngredients}
                                          </span>
                                          <span className="text-xl sm:text-2xl font-semibold text-white py-3 px-6 rounded-full
                                           bg-gradient-to-r from-cyan-700 to-blue-800 shadow-lg text-center
                                           transform hover:scale-105 transition duration-300">
                                                Drink Images: {totalDrinks}
                                          </span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {!searchPerformed && (
                        <>

                              <Popular />
                              <Ingredients />
                              <Latest />
                              <RandomIngredients />
                              <RandomDrinks />
                        </>
                  )}

                  {/* A-Z Navigation */}
                  <div className="flex flex-wrap justify-center my-12 px-4 gap-2 bg-gray-100 py-8 rounded-lg shadow-inner mx-auto max-w-7xl">
                        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                              <button
                                    key={letter}
                                    onClick={() => navigate(`/letter/${letter.toLowerCase()}`)}
                                    className="m-1 p-3 text-white text-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md
                                   hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                                   transition duration-300 transform hover:scale-110 active:scale-95" // Updated colors, added active state
                              >
                                    {letter}
                              </button>
                        ))}
                  </div>
            </div>
      );
};

export default Home;
