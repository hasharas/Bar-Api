import React from 'react';

// Function to limit the text to 20 words
const truncateText = (text, wordLimit) => {
      const words = text.split(' ');
      return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '.......' : text;
};

const BrouseCockCartOne = ({ drink }) => {
      return (
            <div className="bg-white mt-4 h-full rounded-lg shadow cursor-pointer ">
                  <img
                        src={drink.strDrinkThumb}
                        alt={drink.strDrink}
                        className="w-full h-[220px]  rounded-tl-[10px] rounded-tr-[10px]"
                  />
                  <h2 className="text-2xl font-semibold mt-2 px-2">{drink.strDrink}</h2>
                  <p className="text-gray-700 mt-1 p-3">{truncateText(drink.strInstructions, 10)}</p>
            </div>
      );
};

export default BrouseCockCartOne;
