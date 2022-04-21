import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='max-w-7xl md:mx-auto sm:px-0 md:px-4  pt-20 pb-24 flex justify-between static md:sticky md:top-0 z-20 mx-4 md:m-0 '>
        <div>
            
            <div onClick={() => {
                           window.scrollTo(0,0);
                            }} className='text-2xl md:text-5xl text-white cursor-pointer marker inline-block hover:scale-125 '>Kutay<span className='text-sm md:text-xl'>WUYD</span></div>
            
        </div>
        <div>
            <ul className='flex space-x-4  md:space-x-12'>
                <li className='text-lg md:text-2xl text-slate-300 marker hover:text-white'>
                    
                        <a className='cursor-pointer' onClick={() => {
                            const about = window.document.getElementById("about");
                            about.scrollIntoView({
                                "block":"center",
                                "inline" :"center"
                            })
                            }}>About</a>
                    
                </li>
                <li className='text-lg md:text-2xl text-slate-300 marker hover:text-white'>
                    
                        <a className='cursor-pointer' onClick={() => {
                            const works = window.document.getElementById("works");
                            works.scrollIntoView()
                            }}>Works</a>
                   
                </li>
               
                <li className='text-lg md:text-2xl marker  text-slate-300 hover:text-white'>
                        <a className='cursor-pointer' onClick={() => {
                            const contact = window.document.getElementById("contact");
                            contact.scrollIntoView({
                                "block":"center",
                                "inline" :"center"
                            })
                            }}>Contact</a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header