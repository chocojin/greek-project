import * as React from 'react'
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Container } from './Container';

export const Map = ({center, popupDescription = "Generic description"}) => {
    React.useEffect(() => {
        const L = require('leaflet');
        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        
        L.Marker.prototype.options.icon = DefaultIcon;
    }, []);

    return (
        <Container id='map'>
            {(typeof window !== 'undefined') ? 
                <MapContainer 
                center={center} 
                zoom={4} 
                style={{height: '400px', width: '650px', border: 'black 1px solid'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={center}>
                        <Popup>
                            {popupDescription}
                        </Popup>
                    </Marker>
                    <ChangeView center={center} zoom={4}/>
                </MapContainer>
            : null}
        </Container>
    )
}

const ChangeView = ({center, zoom = 4}) => {
    const map = useMap();
    map.flyTo(center, zoom);
    return null;
}


