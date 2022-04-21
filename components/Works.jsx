import React , {useState , useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'

function Works({works}) {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  return (  
    <section id='works' className='max-w-7xl mx-auto flex flex-col'>
      <h1 className='self-center text-6xl font-bold marker text-white animate-pulse'>Works</h1>
        {works.map((work,i) => (
          <div className='flex flex-col lg:flex-row  text-white  rounded-xl px-0 md:px-48 py-24  text-center' key={i}>
            {i %2 == 0 && (
              <>
              <div data-aos={isBigScreen ? "fade-right" : "zoom-in"} className='m-0 md:mx-12 text-2xl md:text-4xl w-auto lg:w-[352.703px] self-center font-bold marker '>
              {work.title}
              </div>
              <div data-aos={isBigScreen ? "fade-right" : "zoom-in"} className='text-base sm:text-xl space-y-4 w-auto lg:w-[583.094px] font-bold rock text-slate-400'>
                <p>{work.content}</p>
                <p>{work.type}</p>
                <p>{work.extra}</p>
                <p>{work.date}</p>
                <p>{work.status}</p>
              </div>
            </>
            )}
            {i %2 != 0 &&(
              <>
              
            <div data-aos={isBigScreen ? "fade-left" : "zoom-in"} className='text-base sm:text-xl space-y-4 w-auto lg:w-[583.094px] font-bold rock text-slate-400'>
              <p>{work.content}</p>
              <p>{work.type}</p>
              <p>{work.extra}</p>
              <p>{work.date}</p>
              <p>{work.status}</p>
            </div>
            <div data-aos={isBigScreen ? "fade-left" : "zoom-in"} className='mx-0 md:mx-12 w-auto lg:w-[352.703px] text-2xl md:text-4xl  self-center font-bold marker'>
              {work.title}
            </div>
            </>
            )}
          </div>


        ))}
    </section>
  )
}

export default Works