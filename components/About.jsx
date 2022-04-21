import React , {useEffect,useRef} from 'react';
import Typed from 'typed.js';
function About() {

  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
    	strings: [
        'Developer',
        'Web Developer',
        'Mobile Developer',
        'Automation',
        'IE Student',
        'System Designer'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop : true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
     
      typed.current.destroy();
    }
  } , [])
 
  return (
    <section id="about" className='max-w-7xl mx-auto text-white flex my-20 flex-col   items-center text-center justify-center md:mt-0  lg:flex-row md:text-left  md:justify-evenly '>
        <div data-aos="zoom-out" className='space-y-4 w-auto mb-12 text-center lg:text-start  md:w-[400px]'>
          <h1 className='text-xl md:text-5xl marker font-bold '>Hi,</h1>
          <h1 className='text-xl md:text-5xl marker font-thin'>I&#39;m Kutay!</h1>
          <div className='flex self-center text-center items-center justify-center md:justify-start'>
            <h1 style={{ whiteSpace: 'pre' }} ref={el} className='text-xl md:text-5xl text-red-200 marker font-thin'></h1>
          </div>
         
        </div>

        <img data-aos="zoom-in" className='w-[300px] md:w-[400px] rounded-full  border-slate-100 border-[20px]' src="me.jpg" alt="me!" />
      </section>
  )
}

export default About