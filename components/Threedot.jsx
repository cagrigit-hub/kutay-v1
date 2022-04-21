import React from 'react';

function Threedot({next}) {
  return (
   <div  onClick={() => {
     if(next === "about"){
       const about = window.document.getElementById("about");
        about.scrollIntoView({
            "block":"center",
            "inline" :"center"
        })
    } else if (next==="works") {
      const works = window.document.getElementById("works");
      works.scrollIntoView()
    } else if(next === "contact") {
      const contact = window.document.getElementById("contact");
      contact.scrollIntoView({
          "block":"center",
          "inline" :"center"
      })
    }}} 
        className='my-[200px] z-50  cursor-pointer space-y-3 items-center justify-center md:flex flex-col  animate-pulse hidden '>
       <div className='bg-gray-300 w-2 h-2 rounded-full'></div>
       <div className='bg-gray-300 w-2 h-2 rounded-full'></div>
       <div className='bg-gray-300 w-2 h-2 rounded-full'></div>
   </div>
  )
}

export default Threedot