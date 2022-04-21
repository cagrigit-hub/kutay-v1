import React from 'react'
function Hero() {
 
  return (
    <section id="hero" className='space-y-2 md:space-y-0 max-w-7xl mx-auto flex  flex-col lg:flex-row justify-evenly text-center mt-20 items-center '>

        <div className='right-side-content animate-pulse '>
         
            <p className='text-white text-7xl md:text-9xl rock font-bold pb-12 md:p-12 '>
                Wuyd
              </p>
          </div>

      <div className='left-side-content relative'>
          <p className='text-white text-xl md:text-4xl marker '>Le vent se lève ! … Il faut tenter de vivre!</p>
          <p className='text-gray-200 text-xl  md:text-4xl marker absolute opacity-50 top-5 md:top-8 left-32 '>Rüzgar yükseliyor… yaşama tutunmak gerek!</p>
      </div>
      
    </section>
  )
}

export default Hero