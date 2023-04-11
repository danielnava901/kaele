import React, { useRef, useEffect } from "react";

function Mapa() {
    const mapRef = useRef(null);

    useEffect(() => {
        const google = window.google;
        const map = new google.maps.Map(mapRef.current, {
            center: { lat: 19.432608, lng: -99.133209 },
            zoom: 13,
        });

        const marker = new google.maps.Marker({
            position: { lat: 19.432608, lng: -99.133209 },
            map: map,
        });

        const contentString = '<div>Ciudad de México</div>';
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }, []);

    return <div ref={mapRef} style={{ height: "400px" }}></div>;
}

export default Mapa;
