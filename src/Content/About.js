import React from "react";

function About(){
    return (
        <section id="about">
            O nás / o festivale
            <div className="row">
                <div className="column">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    In ut interdum risus, in commodo sem. Sed sed porta tellus, 
                    in consectetur libero. Donec pharetra, tortor eget ultrices blandit, 
                    ex lectus egestas dui, eu porttitor lectus massa et ipsum. 
                    Fusce scelerisque lectus ut ipsum fringilla, ut pellentesque massa iaculis. 
                    Sed quis turpis consectetur velit volutpat malesuada eget sit amet est. 
                    Phasellus viverra tempor eros, a hendrerit turpis vulputate eu.
                    </p>
                </div>
                <div className="column">
                    <iframe 
                        src="https://www.youtube.com/embed/aV7xjehmwCg"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="promo"
                        width={500}
                        height={350}
                    />
                </div>
            </div>
            

        </section> 
    )
}

export default About