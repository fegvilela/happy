import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';

import pin from '../images/pin.svg';
import '../styles/pages/orphanages-map.css';

const OrphanagesMap: React.FC = () => {
  return (
    <div id="map-page">
      <aside>
        <header>
          <div className="logo-container">
            <img src={pin} alt="pin happy logo" />
          </div>

          <div className="description-container">
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </div>
        </header>

        <footer className="location-container">
          <strong>Brasília</strong>
          <p>Distrito Federal</p>
        </footer>
      </aside>

      <div></div>

      <Link to="/create" className="create-orphanage">
        <FiPlus size={32} color="white" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
