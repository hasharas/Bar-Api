import React from 'react';
import fb from '../../assets/facebook_icon.png'
import dis from '../../assets/discord_icon.png'
import twit from '../../assets/twitter_icon.png'
import logo5 from '../../assets/logo5.png'


const Footer = () => {
      return (
            <div className=" bottom-0  px-4 py-2 w-full h-[110px] bg-[#b32323] bg-opacity-80  text-white z-2"
                  style={{
                        backgroundImage: "linear-gradient(to left, black ,#009498 )",
                  }}>
                  <footer className="w-full flex justify-between">
                        <div className='flex flex-col align-bottom justify-center w-full'>
                              <span className='text-[15px] font-sans text-gray-400'>© 2024 TheCocktail.</span>
                              <span className='text-[15px] font-sans text-gray-400'>Proudly built in the UK</span>
                        </div>
                        <div className='w-[450px] h-[100px]'><img src={logo5} className='w-full h-full' alt="" /></div>
                        <div className=' flex flex-col w-full py-3 align-middle '>
                              {/* <span className='w-full'>Socials</span> */}
                              <div className="flex  text-xs justify-between pb-2 pl-[400px] w-full ">
                                    <span><a href="" className='text-gray-400'>Missing</a></span>
                                    <span><a href="" className='text-gray-400'>About</a></span>
                                    <span><a href="" className='text-gray-400'>Faz</a></span>
                                    <span><a href="" className='text-gray-400'>Contact</a></span>
                              </div>

                              <div className='flex align-middle justify-end w-full'>

                                    <a href="" className='mx-4 rounded'>
                                          <img src={fb} alt="" className='' />
                                    </a>
                                    <a href="" className='mx-4'>
                                          <img src={twit} alt="" />
                                    </a>
                                    <a href="" className='mx-4'>
                                          <img src={dis} alt="" />

                                    </a>
                              </div>

                        </div>


                  </footer>
            </div>
      );
}

export default Footer;
