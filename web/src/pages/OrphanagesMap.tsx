import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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

      <Map
        center={[-15.8243261, -47.7933586]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
        />
      </Map>

      <Link to="/create" className="create-orphanage">
        <FiPlus size={32} color="white" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
