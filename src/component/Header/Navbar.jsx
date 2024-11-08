import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo5.png'
import search from '../../assets/search.png'

const Navbar = () => {
  return (
    <div className="w-full px-4 pt-2 pb-4 bg-gradient-to-tr bg-[#1e1f1ff1] bg-opacity-90 text-white " style={{
      backgroundImage: "linear-gradient(to right, black ,#009498 )",
    }}>
      <nav className="flex w-full h-[110px] justify-between items-center">
        <div className='m-0  p-0'>
          <Link to="/" className="font-extrabold  text-opacity-90 "><img src={logo1} className='w-[400px] p-2' alt="" /></Link>
        </div>
        <div className="flex justify-between mt-[25px] items-center w-[70%]">
          <ul className="flex space-x-[60px]">
            <li className="text-lg">
              <Link to="/" className='hover:text-[#009498] font-serif'>Home</Link>
            </li>
            <li className="text-lg">
              <Link to="/" className='hover:text-[#009498] font-serif'>About</Link>
            </li>
            <li className="text-lg">
              <Link to="/" className='hover:text-[#009498] font-serif'>Contact Us</Link>
            </li>
          </ul>
          <div className="w-[200px] h-[60px] relative flex items-center">
            <input
              type="search"
              placeholder="Search.."
              className="px-5 w-[180px]  border-none h-[40px] z-10 align-middle rounded"
            />
            <img src={search} alt="search icon" className="w-[30px] cursor-pointer h-[30px] absolute right-[30px] z-20" />
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
