import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full px-4 pt-2 pb-4  bg-[#b32323] bg-opacity-90 text-white ">
      <nav className="flex w-full h-[80px] justify-between items-center">
        <div className='m-0  p-0'>
          <Link className="font-extrabold text-[3rem]"><span className='text-[5rem]'>T</span>he <span className='text-[4.2rem]'>C</span>ockTail</Link>
        </div>
        <div className="flex justify-between mt-[25px] items-center w-[70%]">
          <ul className="flex space-x-[60px]">
            <li className="text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg">
              <Link to="/">About</Link>
            </li>
            <li className="text-lg">
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
          <div className="w-[200px] h-[50px] relative">
            <input
              type="search"
              placeholder="Search.."
              className="px-5 w-[180px]  border-none h-[30px] z-30 align-middle rounded-sm"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
