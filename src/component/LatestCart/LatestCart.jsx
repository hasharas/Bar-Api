import React from 'react';

const LatestCart = ({ image, name }) => {
      return (
            <div className='w-auto h-full  mb-3 bg-slate-50  cursor-pointer rounded-xl  transition-transform transform hover:scale-x-90'>

                  <div> <img src={image} className='w-full  h-[300px] rounded-t-xl border-black' alt="" /></div>
                  <div className='w-full pt-3 pl-4 pr-4'><span className='text-gray-700 font-sans font-semibold text-[1.1rem]'>{name}</span></div>
            </div>
      );
}

export default LatestCart;


// https://www.thecocktaildb.com/ingredient/250-Grenadine