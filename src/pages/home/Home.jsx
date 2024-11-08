// import Navbar from '../../component/Header/Navbar';
import React from 'react';
import back1 from '../../assets/back7.jpeg';
import Populer from '../Populer/Populer';


const Home = () => {
      return (
            <div>
                  <div className="relative w-full h-screen bg-cover bg-center  px-[50px] px-auto" style={{ backgroundImage: `url(${back1})` }}>
                        <div className="absolute inset-0 bg-black opacity-40">

                        </div>

                        <div className="relative w-full text-white flex flex-row justify-between pt-[200px] h-full">
                              <div className='w-[40%] justify-start align-top flex flex-col'>
                                    <h1 className="text-4xl font-bold font-sans ">Signature Cocktails</h1>
                                    <p className="mt-4 text-xl text-opacity-60 text-slate-300 font-sans">Explore a curated selection of refreshing and tantalizing cocktails, designed to suit every taste. Whether you are a fan of sweet, bitter, or fruity flavors, our collection features a diverse range of drinks that are perfect for any occasion.</p>
                              </div>
                              <div className='w-[50%] flex flex-col'>
                                    <div className='w-[100%] flex  justify-end'>
                                          <input
                                                type="search"
                                                placeholder='Search for a coktails....'
                                                className='w-[50%] h-[50px] mr-[30px] p-5 border-none rounded text-l '
                                          />
                                          <button className='bg-[#b32323] w-[30%] h-[50px] text-center rounded text-xl font-sans hover:bg-[#bc3333]'>Search</button>
                                    </div>
                                    <div className='flex flex-col pl-[140px]'>
                                          <span className='text-xl py-1 pl-[20px] mt-4 mb-1 text-left'>Total Drinks: 300</span>
                                          <span className='text-xl py-1 my-1 text-center'>Total Ingredients: 243</span>
                                          <span className='text-xl py-1 my-1 pr-[40px] text-right'>Drink Images: 234</span>
                                    </div>
                              </div>

                        </div>

                  </div>

                  <Populer />
            </div>
      );
};

export default Home;
