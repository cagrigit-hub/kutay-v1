
import Hero from '../components/Hero'
import Threedot from '../components/Threedot'
import Works from '../components/Works'
import About from '../components/About'

import axios from 'axios'

import AOS from 'aos';
import 'aos/dist/aos.css';


import { useEffect } from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export async function getServerSideProps(){
  const res = await axios.get("http://localhost:3000/api/works_fetcher");
  const works = res.data

  return {
    props: {
      works
    }
  }
}
export default function Home({works}) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
     
    });
    AOS.refresh();
   
  },[]);

  
  return (
    <>
    <Hero />
    <Threedot next={"about"} />
    <About />
    <Threedot next={"works"} />
    <Works works={works} />
    <div className='h-1 my-[150px]' /> 
    <Contact />
    <Footer />
    </>
  )
}
