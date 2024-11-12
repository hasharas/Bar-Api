import React from 'react';

const IngredientsCart = ({ name, type, imageUrl }) => {
      return (

            <div className="flex flex-col w-auto h-full  mb-3 cursor-pointer items-center p-4 bg-slate-200 shadow-md rounded-full ">
                  <img src={imageUrl} alt={name} className="w-52 h-52 object-cover rounded-full" />
                  <p className="mt-4 text-lg font-semibold">{name}</p>

            </div>
      );
};

export default IngredientsCart;
