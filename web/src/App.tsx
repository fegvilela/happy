import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';

import logo from './images/logo.svg';

function App() {
  return (
    <div id="landing-page">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo happy"/>
        </div>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location-container">
          <strong>Brasília</strong>
          <p>Distrito Federal</p>
        </div>

        <a href="/" className="button-enter"> 
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.5)" />
        </a>
      </div>
    </div>
  );
}

export default App;
