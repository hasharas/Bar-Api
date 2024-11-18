import React from 'react';

const Contact = () => {
      return (
            <div className='mx-[150px]'>
                  <h2 className='text-center text-[#009498] font-bold  mb-2  font-sans  text-[2.5rem]'>Contact</h2>
                  <hr />
                  <p className='text-center font-semibold mt-2'>Email: <span className='text-gray-500'>thedatadb@gmail.com</span></p>

                  <h2 className='text-center font-bold mt-5 mb-0'>Copyright Notice</h2>
                  <p className='text-center text-gray-500  mb-[100px]'>The CocktailDB encourages all users to upload content that they create such as drinks photo's
                        As an open, user-generated site, content may slip through our moderation process.
                        If you claim copyright on any images on the site please send us an email and valid requests will remove within 48hrs.
                        Alternatively we are happy to credit and link images if prefered.</p>
                  <hr />
            </div>
      );
}

export default Contact;
