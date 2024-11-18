import React from 'react';
import fb from '../../assets/facebook_icon.png'
import dis from '../../assets/discord_icon.png'
import twit from '../../assets/twitter_icon.png'
import logo5 from '../../assets/logo5.png'
import { Link } from 'react-router-dom';


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
                        <div className='w-[450px] h-[100px]'>
                              <Link to="/">
                                    <img src={logo5} className='w-full h-full' alt="" />
                              </Link>
                        </div>
                        <div className=' flex flex-col w-full py-3 align-middle '>
                              {/* <span className='w-full'>Socials</span> */}
                              <div className="flex  text-xs justify-between pb-2 pl-[400px] w-full ">
                                    <Link to="/missing" className="text-gray-400">Missing</Link>
                                    <Link to="/about" className="text-gray-400">About</Link>
                                    <Link to="/faq" className="text-gray-400">Faq</Link>
                                    <Link to="/contact" className="text-gray-400">Contact</Link>

                              </div>

                              <div className='flex align-middle justify-end w-full'>

                                    <a href="https://www.facebook.com/TheDataDB/" className='mx-4 rounded'>
                                          <img src={fb} alt="" className='' />
                                    </a>
                                    <a href="https://twitter.com/TheAudioDB" className='mx-4'>
                                          <img src={twit} alt="" />
                                    </a>
                                    <a href="https://discord.com/invite/pFvgaXV" className='mx-4'>
                                          <img src={dis} alt="" />

                                    </a>
                              </div>

                        </div>


                  </footer>
            </div>
      );
}

export default Footer;
