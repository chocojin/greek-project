import * as React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container } from './Container'

export const Map = () => {
    return (
        <Container id='map'>
            {(typeof window !== 'undefined') ? (
                <MapContainer center={[51.505, -0.09]} zoom={4} style={{height: '700px', width: '700px'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : null} 
        </Container>
    )
}


