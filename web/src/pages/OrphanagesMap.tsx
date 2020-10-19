import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    // let brazilMaxBounds = [
    //     [-73.9872354804, -33.7683777809],
    //     [-34.7299934555, 5.24448639569]
    // ];

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Marker Happy" />

                    <h2>Escolha uma casa de acolhimento no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>SP</span>
                </footer>
            </aside>

            <Map 
                center={[-23.6815315,-46.8754907]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
                // maxBounds={[[-73.9872354804, -33.7683777809], [-34.7299934555, 5.24448639569]]}    
                maxBounds={[[-33.7683777809, -73.9872354804],[5.24448639569, -34.7299934555]]}
                minZoom={6}
                maxZoom={15}
                
            >   

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                {orphanages.map(orphanage => {
                    return (
                    <Marker 
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude, orphanage.longitude]}
                    >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#FFF" />
                            </Link>
                        </Popup>
                    </Marker> 
                    )
                })}              
            </Map> 

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;