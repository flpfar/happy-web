import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';
import mapMarking from '../images/map-marker.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarking} alt="Happy Marking"/>
          <h2>Choose an orphanage in the map</h2>
          <p>A lot of children are waiting for your visit :)</p>
        </header>

        <footer>
          <strong>Porto Ferreira</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map 
        center={[-21.8678323, -47.4747237]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;