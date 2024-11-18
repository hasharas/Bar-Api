import React from 'react';
import faq from '../../assets/faq.png'

const Faq = () => {
      return (
            <div className='mx-[150px]'>
                  <div className='flex justify-center my-3'>
                        <img src={faq} alt="" />
                  </div>
                  <hr />
                  <p className='text-center font-semibold mt-3'>How do I add a cocktail?</p>
                  <p className='text-center text-gray-500 '>Only Patreon supporters can add new cocktails. The link is on Patreon as a news item. Just make sure you have a nice large JPG image to upload after you add them.</p>

                  <p className='text-center font-semibold mt-4'>How do I apply for an API key?</p>
                  <p className='text-center text-gray-500 '>If you are a developer, then you can use the test api key of '1' to get started.
                        Once you have written your app you can support us on Patreon and apply for a production API key via email. API keys usually take 24hrs.</p>

                  <p className='text-center font-semibold mt-4'>How do I upload an image?</p>
                  <p className='text-center text-gray-500 '>Just click the red upload image button and upload a picture that is square dimensions. We recomend 700x700 size.</p>


                  <p className='text-center font-semibold mt-4'>Are there any limits on the API?</p>
                  <p className='text-center text-gray-500 '>No limits, the API is unlimited usage.</p>

                  <p className='text-center font-semibold mt-4'>I'm have a commercial app, can I use the database?</p>
                  <p className='text-center text-gray-500 mb-6'>Yes! But we expect you to sign up on Patreon. We are non-profit and all support goes towards the site.</p>

                  <hr className='my-10' />

            </div>
      );
}

export default Faq;
