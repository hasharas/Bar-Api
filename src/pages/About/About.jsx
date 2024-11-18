import React from 'react';
import CockTail from '../../assets/cockTail.jpg'
import img1 from '../../assets/ddg.png'
import img2 from '../../assets/kodi_logo.png'
import ddg from '../../assets/ddg.png'


const About = () => {
      return (
            <div className='w-full h-auto px-[50px] px-auto'>
                  <h2 className='text-center font-bold font-sans text-[#009498] text-[2.5rem]'>About</h2>
                  <hr />
                  <p className='text-center mx-[150px] my-7 text-gray-500'>TheCocktailDB was built in 2015 to provide a free data source api for drinks online
                        in the hope that developers would build applications and cool projects ontop of it.
                        TheCocktailDB originated on the  <a className='text-[#8eb5b5] hover:text-[#009498] cursor-pointer' href="https://forum.kodi.tv/showthread.php?tid=235298"> Kodi forums </a>as a way to browse cocktail recipes on your TV.</p>
                  <div className='flex justify-center my-8'>
                        <img src={CockTail} alt="" />
                  </div>
                  <div className=''>
                        <p className='flex justify-center text-center font-semibold font-sans text-[#4edbdf] text-[1.2rem]'>There are also some supporting Apps</p>
                        <p className='flex justify-center font-semibold font-sans'>JavaScript :<a href=" https://www.npmjs.com/package/cocktail-api-search" className='text-[#8eb5b5] hover:text-[#009498]'> https://www.npmjs.com/package/cocktail-api-search</a></p>
                  </div>
                  <div className='my-4'>
                        <p className='text-center font-semibold font-sans text-gray-500 text-[1.2rem]'>Many developers have since contributed to the project and built apps on top of it. You can see some of them listed below:</p>
                        <div className='flex justify-center my-4 '>
                              <a href="https://duckduckgo.com/?q=margarita+recipe&t=h_&ia=recipes" className='mr-5'><img src={img1} alt="" /></a>
                              <a href="https://forum.kodi.tv/showthread.php?tid=238039" className='ml-5'><img src={img2} alt="" /></a>

                        </div>
                  </div>
                  <div>
                        <p className='text-center font-semibold font-sans text-gray-500 text-[1.2rem]'>TheCocktailDB is also used by universities to tech web design and programming as it has an easy to use API and cool content.</p>
                        <div>
                              <a href=""><img src={ddg} alt="" /></a>
                        </div>
                  </div>
                  <hr className='my-7' />
            </div>
      );
}

export default About;
