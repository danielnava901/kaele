import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Mapa() {
    const [position, setPosition] = useState([19.432608, -99.133209]);

    return (
        <MapContainer center={position} zoom={13}
                      style={{ height: "400px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>
                    <a
                        href={`https://www.google.com/maps/search/${position[0]},${position[1]}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ciudad de México
                    </a>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Mapa;
