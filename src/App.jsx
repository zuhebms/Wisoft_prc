// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
// import Navbars from './components/Navbars';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Cards from './components/Cards';
import Section3 from './components/Section3';
// import Carosl from "./components/Carosl";
import Gradient from './components/Gradient';
import Ex from './components/Ex';


function App() {
  

  return (
    <>
      <div className="">
        <Navbar />
        <Hero>Request a quote</Hero>
        {/* <Button/> */}
        <Section1 />
        <Section2 />
        <Cards/>
        <Section3/>
        {/* <Carosl/> */}
        <Gradient/>
{/*         <Ex/> */}
        <Footer />
        {/* <Navbars
          title1={"Home"}
          title2={"profile"}
          title3={"tasks"}
          title4={"logout"}
        /> */}
        
      </div>
    </>
  );
}

export default App
