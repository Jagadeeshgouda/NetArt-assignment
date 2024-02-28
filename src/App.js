import React from 'react';
import logo from './asserts/logo.png';
import first from './asserts/1.png';
import second from './asserts/2.png';
import last from './asserts/3.png';
import './App.css';
import { FaPhoneVolume, FaLinkedin, FaGithub, FaChrome } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main>
        <div className="first-section">
          <img src={first} alt="First" className="first-image" />
          <div className="content">
            <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
            <ul>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <img src={second} alt="Second" className="second-image" />
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>

        <section className="section">
          <h4>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h4>
          <img src={last} alt="Last" className="last-image" />
          <p className='align'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
          <hr />
          <h3 className='align'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
          <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
        </section>
      </main>
      <footer>
        <div className="social-icons">
        <a href="tel:123456789"><FaPhoneVolume /></a>
          <a href='https://github.com/Jagadeeshgouda/My-taxi'><FaGithub/></a>
          <a href='https://portfolio-1amv.vercel.app/'><FaChrome/></a>
          <a href='linkedin.com/in/jagadeeshgouda-rayangoudr-050337209'><FaLinkedin/></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
