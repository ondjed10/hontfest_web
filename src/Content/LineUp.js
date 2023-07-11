import React, { useEffect, useState } from "react";
import {TransitionGroup} from 'react-transition-group'
export const LineUp = () => {

    const bands = ['Sima Magušinová', 'LCH - Live + Ego', 'Timothy', 'XYZ', 'ABC']

    const [index, setIndex] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((index + 1) % bands.length)
        }, 3000)
        return () => clearInterval(interval)

    },[index])



    return (
        <div>
            {/* <div className="lineup">
                <div key={index} className="band roll-out out">
                    <span className="lineUpName">{bands[index]}</span>
                </div>        
            </div> */}
            <div className="row">
                <div className="column">
                    <div className="sectionNameContainer">
                        <h3 className="program">STAGE</h3>
                    </div>
                    
                    {
                        bands.map(band => {
                            return <p className="bands"> XX:YY  Insert band name</p>
                        })
                    }
                </div>
                <div className="column">
                    <div className="sectionNameContainer">
                        <h3 className="program">Diskusný stan</h3>
                    </div> 
                    {
                        bands.map(band => {
                            return <p className="bands"> XX:YY  Insert band name</p>
                        })
                    }                  
                </div>
            </div>
        </div>
        
    )

}