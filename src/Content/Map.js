import React from "react";

function Map({location}){

        return (
            <iframe src="https://maps.google.com/maps?q=48.16572, 18.88157&z=15&output=embed" style={{border: 0+'px'}} width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        )
}

export default Map