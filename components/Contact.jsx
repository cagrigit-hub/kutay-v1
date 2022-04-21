import React from 'react'
import Link from "next/link"
function Contact() {
  return (
    <section className='max-w-7xl small mx-auto text-white font-bold marker flex flex-col h-[243.250px] justify-start  sm:justify-center' id="contact">
        <div className=' space-y-2'>
            <p className='text-4xl animate-pulse'>Contact / Hire Me</p>
            <div className='w-[320.172px]  animate-pulse h-2 bg-white' />
        </div>
        <div className='flex flex-col md:flex-row  mt-12 items-center justify-between'>
       
            <a href="mailto:cagri@cpaths.org" className='px-12 py-6 mx-12 my-6 md:ml-16 border-slate-200 border rounded-md hover:bg-white hover:text-black duration-500 '>Contact Me</a>
        
        <div className='w-1 h-16 animate-pulse absolute left-[50%] rounded-full bg-slate-200  md:flex hidden'></div>
        <div className='flex space-x-12 text-xl underline underline-offset-1 text-slate-300 '>
            <div className='hover:text-white' >
                <Link href="https://www.instagram.com/cagri_ok/">
                    <a target="_blank">Instagram</a>
                </Link>
            </div>
            <div className='hover:text-white' >
                <Link  href="https://tr.linkedin.com/in/%C3%A7a%C4%9Fr%C4%B1-kutay-ok-a83800172">
                    <a target="_blank">LinkedIn</a>

                </Link>
            </div>

        </div>
        </div>
        
    </section>
  )
}

export default Contact