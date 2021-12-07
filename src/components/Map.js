import * as React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container } from './Container'

export const Map = () => {
    return (
        <Container id='map'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: '700px', width: '700px'}}>
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
        </Container>
    )
}


