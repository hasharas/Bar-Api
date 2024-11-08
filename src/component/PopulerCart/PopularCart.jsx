import React from 'react';
// import back1 from '../../assets/back1.png';

const PopularCart = ({ name, image }) => {
      return (

            <div className='w-auto h-full p-2 mb-3 bg-slate-50  cursor-pointer rounded-2xl border border-[#b32323] transition-transform transform hover:scale-x-90'>

                  <div> <img src={image} className='w-full  h-[300px] rounded-2xl border-black' alt="" /></div>
                  <div className='w-full pt-3 pl-2'><span className='text-[#b32323] font-sans font-semibold text-[1.1rem]'>{name}</span></div>
            </div>


      );
}

export default PopularCart;
