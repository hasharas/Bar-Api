import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import back1 from '../../assets/back5.jpeg';
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
                        // Fetching total drinks by counting drinks starting with each letter A-Z
                        let totalDrinkCount = 0;
                        for (let letter of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
                              const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
                              totalDrinkCount += response.data.drinks ? response.data.drinks.length : 0;
                        }
                        setTotalDrinks(totalDrinkCount);

                        // Fetching total ingredients
                        const ingredientsResponse = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
                        setTotalIngredients(ingredientsResponse.data.drinks.length);
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
                  <div className="relative w-full h-screen bg-cover bg-center px-[50px] px-auto" style={{ backgroundImage: `url(${back1})` }}>
                        <div className="absolute inset-0 bg-black opacity-40"></div>

                        <div className="relative w-full text-white flex flex-row justify-between pt-[100px] h-full">
                              <div className='w-[50%] flex flex-col'>
                                    <span className='font-bold font-serif text-[#009498] text-[3.5rem] w-full leading-[3.9rem] pb-[20px]'>Get Ready To Raise A Glass</span>
                                    <h1 className="text-4xl font-bold font-sans">Signature Cocktails</h1>
                                    <p className="mt-4 text-xl text-opacity-60 text-slate-300 font-sans">
                                          Explore a curated selection of refreshing and tantalizing cocktails, designed to suit every taste.
                                    </p>
                                    <Link className='text-[#009498] mt-4 text-xl'>Learn more.....</Link>
                              </div>
                              <div className='w-[50%] flex flex-col'>
                                    <div className='w-[100%] flex justify-end'>
                                          <input
                                                type="search"
                                                placeholder='Search for a cocktail...'
                                                className='w-[50%] h-[50px] mr-[30px] p-5 border-none text-black rounded text-l'
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                          />
                                          <button onClick={handleSearch} className='bg-[#009498] w-[30%] h-[50px] text-center rounded text-xl font-sans hover:bg-[#36989b]'>
                                                Search
                                          </button>
                                    </div>
                                    <div className='mt-[70px] flex flex-col gap-8 pl-[140px]'>
                                          <span className='text-xl font-semibold text-center align-middle text-black py-1 px-4 rounded-3xl border-none ml-[15px] mr-[330px] mt-4 mb-1 bg-[#009498]'>Total Drinks: {totalDrinks} </span>
                                          <span className='text-xl py-1 px-4 my-1 ml-[130px] border-none text-black font-semibold text-center rounded-3xl mr-[170px] bg-[#009498]'>Total Ingredients: {totalIngredients}</span>
                                          <span className='text-xl py-1 px-3 ml-[300px] mr-[40px] border-none font-semibold text-center text-black rounded-3xl bg-[#009498]'>Drink Images: {totalDrinks}</span>
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

                  {/* A-Z Navigation at the bottom */}
                  <div className="flex justify-center mt-10 mb-3 ">
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

export default Home;
