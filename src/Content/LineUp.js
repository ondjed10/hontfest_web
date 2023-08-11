import React, { useEffect, useState } from "react";
export const LineUp = () => {

    const bands = [
    '13:30 FS Agátik', 
    '14:30 Martindom Worship',
    '16:00 Towmeot',
    '17:00 Sima Magušinová',
    '18:30 LCH LIVE',
    '19:30 EGO',
    '20:30 Timothy' 
    ]

    const discusions = [
        '16:30 Odsúdení na spásu',
        '18:30 Povolanie manžel/ka'
    ]

    return (
        <div>
            <div className="rowProgram">
                <div className="column">
                    <div className="sectionNameContainer">
                        <h1 className="sectionName">STAGE</h1>
                    </div>
                    
                    {
                        bands.map(band => {
                            return <p className="bands">{band}</p>
                        })
                    }
                </div>
                <div className="column">
                    <div className="sectionNameContainer">
                        <h1 className="sectionName">Diskusný stan</h1>
                    </div> 
                    <div className="disc">
                        {
                            discusions.map(disc => {
                                return <p className="discs">{disc}</p>
                            })
                        }     
                    </div>                 
                </div>
            </div>
        </div>
        
    )

}