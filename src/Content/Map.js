import React from "react";
import {useLoadScript, GoogleMap, Marker} from "@react-google-maps/api"


function Map({location}){

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    
    if (!isLoaded){
        return <div>Loading....</div>
    }
        return (
            <GoogleMap
                zoom={location.zoom}
                center={location.center}
                mapContainerClassName="mapContainer"
            >
                <Marker
                    position={location.center}
                >

                </Marker>
            </GoogleMap>

        )
}

export default Map