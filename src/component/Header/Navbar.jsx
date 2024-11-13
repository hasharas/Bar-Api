import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo1 from '../../assets/logo5.png';
import search from '../../assets/search.png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = response.data;
      navigate('/Browse-Cocktails', { state: { cocktails: data.drinks || [] } });
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    }
  };

  return (
    <div className="w-full px-4 pt-2 pb-4 bg-gradient-to-tr bg-[#1e1f1ff1] bg-opacity-90 text-white" style={{
      backgroundImage: "linear-gradient(to right, black ,#009498 )",
    }}>
      <nav className="flex w-full h-[110px] justify-between items-center">
        <div className='m-0 p-0'>
          <Link to="/" className="font-extrabold text-opacity-90">
            <img src={logo1} className='w-[400px] p-2' alt="logo" />
          </Link>
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
              className="px-5 w-[180px] text-black border-none h-[40px] z-10 align-middle rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <img
              src={search}
              alt="search icon"
              className="w-[30px] cursor-pointer h-[30px] absolute right-[30px] z-20"
              onClick={handleSearch}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
