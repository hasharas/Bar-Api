import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook to access state
import BrouseCockCart from '../../component/BrouseCockCart/BrouseCockCart'; // Make sure to import the BrouseCockCart component

const BrowseCocktails = () => {
      const location = useLocation(); // Access the location object
      const cocktails = location.state?.cocktails || []; // Get cocktails data passed via state, fallback to empty array if not found

      return (
            <div className='px-[70px]  mx-auto pt-5 pb-4 h-auto'
                  style={{
                        backgroundImage: "linear-gradient(to left, black ,white )",
                  }}>
                  <span className='text-3xl mb-5 font-sans font-bold text-[#009498]'>Browse Cocktails</span>
                  {/* Pass the cocktails data to BrouseCockCart */}
                  <BrouseCockCart cocktails={cocktails} />
            </div>
      );
};

export default BrowseCocktails;
