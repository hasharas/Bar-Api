import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RandomDrinksCart from '../../component/RandomDrinksCart/RandomDrinksCart';
import { useNavigate } from 'react-router-dom';

const RandomDrinks = () => {
      const [cockTail, setCockTail] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 8;
      const navigate = useNavigate();

      useEffect(() => {
            const fetchCockTail = async () => {
                  try {
                        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');
                        setCockTail(response.data.drinks);
                  } catch (error) {
                        console.log("Error fetching data:", error);
                  }
            };
            fetchCockTail();
      }, []);

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentCocktails = cockTail.slice(indexOfFirstItem, indexOfLastItem);

      const handleNextPage = () => {
            if (currentPage < Math.ceil(cockTail.length / itemsPerPage)) {
                  setCurrentPage(currentPage + 1);
            }
      };

      const handlePreviousPage = () => {
            if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
            }
      };

      const handleCocktailClick = (id) => {
            navigate(`/cocktail/${id}`);
      };

      return (
            <div className='w-full h-full px-[70px] py-6 px-auto'
                  style={{
                        backgroundImage: "linear-gradient(to left, black ,white )",
                  }}>
                  <hr className='mb-3' />
                  <p className='text-3xl mb-5 pl-1 font-sans font-bold text-[#009498]'>Random Drinks</p>
                  <div className="grid grid-cols-4 gap-1 gap-y-6 mb-6 mt-10 justify-items-center items-center">
                        {currentCocktails.map((cock) => (
                              <RandomDrinksCart
                                    onClick={() => handleCocktailClick(cock.idDrink)}
                                    key={cock.idDrink}
                                    image={cock.strDrinkThumb}
                                    name={cock.strDrink}
                              />
                        ))}
                  </div>

                  <div className='flex justify-between px-4'>
                        <div className='m-2'>
                              <button
                                    className='w-[150px] h-[50px] rounded text-white bg-[#009498]'
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                              >
                                    Previous
                              </button>
                        </div>
                        <div>
                              <button
                                    className='w-[150px] h-[50px] rounded text-white bg-[#009498]'
                                    onClick={handleNextPage}
                                    disabled={currentPage >= Math.ceil(cockTail.length / itemsPerPage)}
                              >
                                    Next
                              </button>
                        </div>
                  </div>
            </div>
      );
}

export default RandomDrinks;