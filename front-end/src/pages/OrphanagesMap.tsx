import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from  'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../assets/img/map-pin.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Ipatinga</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>
            <MapContainer 
                center={[-20.7408465, -42.8735319]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.open.streetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;