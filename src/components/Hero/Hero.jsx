import React from "react";
import './_hero.scss';
import heroImg from '../../assets/hero-image.png';

const Hero = () => {

    return (
        <section id="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>The first 3D Battle Royale Shooter for NFTs.</h1>
                    <p>2040. The financial system has failed. Nation-based reserve currencies have collapsed under hyperinflation, causing governments to fall. After months of global riots and looting, NFT squads now control the world, establishing Ethereum as the world currency. The Funding Fathers of the new world have created a new concept: The Arena.</p>
                    <button onClick="location.href='#contact'" className="btn">Mint Your Genesis Crate</button>
                </div>
                <img src={heroImg} alt="hero image" className="hero-img" />
            </div>
        </section>
    )
}

export default Hero