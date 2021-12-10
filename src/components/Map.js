import * as React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Container } from './Container';
import Leaflet from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


export const Map = ({center, popupDescription = "Generic description"}) => {
    if (typeof window !== 'undefined') {
        const DefaultIcon = Leaflet.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        
        Leaflet.Marker.prototype.options.icon = DefaultIcon;
    }
    
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

export const ChangeView = ({center, zoom = 4}) => {
    const map = useMap();
    map.flyTo(center, zoom);
    return null;
}


