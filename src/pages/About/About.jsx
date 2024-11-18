import React from 'react';
import CockTail from '../../assets/cockTail.jpg'
import img1 from '../../assets/ddg.png'
import img2 from '../../assets/kodi_logo.png'
import ddg from '../../assets/uni.png'
import iphone1 from '../../assets/iphone1.jpeg'
import iphone2 from '../../assets/iphone2.jpeg'
import iphone3 from '../../assets/iphone3.jpeg'
import watch from '../../assets/pebble.jpg'


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
                  <div className='my-4'>
                        <p className='text-center font-semibold font-sans text-gray-500 text-[1.2rem]'>TheCocktailDB is also used by universities to tech web design and programming as it has an easy to use API and cool content.</p>
                        <div className='flex justify-center my-3'>
                              <a href=""><img src={ddg} alt="" /></a>
                        </div>
                  </div>
                  <div className='my-4'>
                        <p className='text-center mt-2 font-semibold font-sans text-gray-500 text-[1.2rem]'>There are also some chatbots available that use our API:</p>
                        <p className='flex justify-center font-semibold font-sans mb-3'>Discode : <a href="https://github.com/Richardson-Media-House/Kirbi/" className='text-[#8eb5b5] hover:text-[#009498]'> https://github.com/Richardson-Media-House/Kirbi/</a></p>
                        <p className='text-center text-gray-500 mb-2'>And used in Apps for <a href='https://play.google.com/store/apps/details?id=com.mytech.cocktail2go' className='text-[#8eb5b5] hover:text-[#009498] cursor-pointer'>Android</a> and <a href='https://apps.apple.com/us/app/cocktail-recipes-to-go/id1150892210?l=de&ls=1' className='text-[#8eb5b5] hover:text-[#009498] cursor-pointer'>iPhone</a>!</p>
                        <div className='flex justify-center space-x-5'>
                              <a href=""> <img src={iphone1} alt="" /></a>
                              <a href=""> <img src={iphone2} alt="" /></a>
                              <a href=""> <img src={iphone3} alt="" /></a>
                        </div>
                  </div>
                  <div className='my-4'>
                        <p className='text-center text-gray-500 mb-2'>There is also an app created for the <a className='text-[#8eb5b5] hover:text-[#009498]' href="https://apps.getpebble.com/en_US/application/580d68eae19568a13600021d">pebble smart watch</a>!</p>
                        <div className='flex justify-center'>
                              <img src={watch} alt="" />
                        </div>
                  </div>
                  <hr className='my-7' />
            </div>
      );
}

export default About;
