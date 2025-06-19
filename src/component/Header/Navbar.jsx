import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo1 from '../../assets/logo5.png';
import search from '../../assets/search.png';
import Cart from '../../assets/cart3.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get cart items from Redux state
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const cartItemCount = cartItems.length;

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;

    setLoading(true); // Start loading
    try {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = response.data;
      navigate('/Browse-Cocktails', { state: { cocktails: data.drinks || [] } });
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full px-4 pt-2 pb-4 bg-gradient-to-tr bg-[#1e1f1ff1] bg-opacity-90 text-white" style={{
      backgroundImage: "linear-gradient(to right, black ,#0047498 )",
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
              <Link to="/about" className='hover:text-[#009498] font-serif'>About</Link>
            </li>
            <li className="text-lg">
              <Link to="/contact" className='hover:text-[#009498] font-serif'>Contact Us</Link>
            </li>
          </ul>

          {/* Link for navigation */}

          <div className="w-auto h-[60px] relative flex  items-center justify-between">
            <div className='relative flex justify-end items-end'>
              <Link to="/cart">
                <img src={Cart} className='w-[30px] mr-[40px] h-[30px] cursor-pointer' alt="Cart" />
              </Link>
              {/* Cart Item Count */}
              {cartItemCount > 0 && (
                <span className="absolute top-[-10px] mr-[20px] right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>
            <input
              type="search"
              placeholder="Search.."
              className="pr-5 w-[180px] ml-2 pl-[30px] text-black border-none h-[40px] z-10 align-middle rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <img
              src={search}
              alt="search icon"
              className="w-[30px] cursor-pointer h-[30px] absolute right-[10px] z-20"
              onClick={handleSearch}
            />
            {/* Loading Spinner */}
            {loading && <div className="absolute right-[60px] top-[50%] transform -translate-y-[50%]">Loading...</div>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
