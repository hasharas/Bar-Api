import React, { useEffect, useState } from 'react';
import PopularCart from '../../component/PopularCart/PopularCart';
// import populerService from '../../services/PopulerService';
import atozService from '../../services/AtozService';

const Popular = () => {
      const [cocktails, setCocktails] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
      const itemsPerPage = 8;

      useEffect(() => {
            const fetchCocktails = async () => {
                  try {
                        setIsLoading(true);
                        setError(null);

                        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
                        const requests = alphabet.split('').map((letter) =>
                              atozService.fetchCocktailsByLetter(letter)
                        );

                        const responses = await Promise.all(requests);
                        const allCocktails = responses.flatMap((response) => response?.drinks || []);
                        setCocktails(allCocktails);
                  } catch (err) {
                        setError('Error fetching cocktails. Please try again later.');
                  } finally {
                        setIsLoading(false);
                  }
            };

            fetchCocktails();
      }, []);

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentCocktails = cocktails.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.ceil(cocktails.length / itemsPerPage);

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

      return (
            <div className='w-full h-full px-[70px] py-6' style={{ backgroundImage: "linear-gradient(to left, black, white)" }}>
                  <p className='text-3xl mb-5 font-sans font-bold pl-1 text-[#009498]'>Popular Drinks</p>

                  {isLoading && <p className="text-center text-lg text-green-700">Loading...</p>}
                  {error && <p className="text-center text-lg text-red-500">{error}</p>}

                  {!isLoading && !error && (
                        <>
                              <div className="grid grid-cols-4 gap-1 gap-y-6 mb-6 mt-10 justify-items-center items-center">
                                    {currentCocktails.map((cocktail) => (
                                          <PopularCart
                                                key={cocktail.idDrink}
                                                id={cocktail.idDrink}
                                                image={cocktail.strDrinkThumb}
                                                name={cocktail.strDrink}
                                          />
                                    ))}
                              </div>

                              <div className='flex justify-between px-4 mt-6'>
                                    <button
                                          className='w-[150px] h-[50px] rounded text-white bg-[#009498] disabled:opacity-50'
                                          onClick={handlePreviousPage}
                                          disabled={currentPage === 1}
                                          aria-label="Previous Page"
                                    >
                                          Previous
                                    </button>
                                    <button
                                          className='w-[150px] h-[50px] rounded text-white bg-[#009498] disabled:opacity-50'
                                          onClick={handleNextPage}
                                          disabled={currentPage === totalPages}
                                          aria-label="Next Page"
                                    >
                                          Next
                                    </button>
                              </div>
                        </>
                  )}
            </div>
      );
};

export default Popular;
