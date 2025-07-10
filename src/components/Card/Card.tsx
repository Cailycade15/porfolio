import React from "react";

import "./Card.css"


interface CardTypes {
    img_path: string,
    main_word_1: string,
    main_word_2: string,

}

const Card = ({img_path, main_word_1, main_word_2}: CardTypes) => {

    return(
        <div className="container noselect">
        <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div id="card" style={{ backgroundImage: `url(${img_path})`, backgroundSize: 'cover' }}>
                <div className="card-content">
                    <div className="card-glare"></div>
                    <div className="cyber-lines">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <p id="prompt">{main_word_1}<br />{main_word_2}</p>
                    <div className="title">{main_word_1}<br />{main_word_2}</div>
                    <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                    </div>
                    <div className="subtitle">
                    {/* <span></span>
                    <span className="highlight"></span> */}
                    </div>
                    <div className="card-particles">
                    <span></span><span></span><span></span> <span></span><span></span
                    ><span></span>
                    </div>
                    <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="scan-line"></div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Card;