import React from 'react';
import { useLocation } from 'react-router-dom';
import BrouseCockCart from '../../component/BrouseCockCart/BrouseCockCart';

const BrowseCocktails = () => {
      const location = useLocation();
      const cocktails = location.state?.cocktails || []; //  cocktails data passed  state,

      return (
            <div className='px-[70px]  mx-auto pt-5 pb-4 h-auto'
                  style={{
                        backgroundImage: "linear-gradient(to left, black ,white )",
                  }}>
                  <span className='text-3xl mb-5 font-sans font-bold text-[#009498]'>Browse Cocktails</span>
                  <BrouseCockCart cocktails={cocktails} />
            </div>
      );
};

export default BrowseCocktails;
