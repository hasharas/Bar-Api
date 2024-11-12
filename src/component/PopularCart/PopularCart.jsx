import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularCart = ({ id, name, image }) => {
      const navigate = useNavigate();

      const handleClick = () => {
            navigate(`/cocktail/${id}`);
      };

      return (
            <div
                  onClick={handleClick}
                  className="w-auto h-full mb-3 bg-slate-50 cursor-pointer rounded "
            >
                  <div>
                        <img src={image} className=' w-full h-[300px] rounded-t border-black' alt={name} />
                  </div>
                  <div className='w-full pt-3 pl-4 pr-4'>
                        <span className='text-gray-700 font-sans font-semibold text-[1.1rem]'>{name}</span>
                  </div>
            </div>
      );
}

export default PopularCart;
