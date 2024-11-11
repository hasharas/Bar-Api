import React from 'react';

const RandomDrinksCart = ({ name, image, onClick }) => {
      return (
            <div
                  onClick={onClick}
                  className='w-auto h-full mb-3 bg-slate-50 cursor-pointer rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
                  <div>
                        <img
                              src={image}
                              className='w-full h-[300px] rounded-t-xl object-cover border-black'
                              alt={`${name}`}
                        />
                  </div>
                  <div className='w-full px-3 pt-2'>
                        <span className='text-gray-700 font-sans font-semibold text-lg'>{name}</span>
                  </div>
            </div>
      );
}

export default RandomDrinksCart;
