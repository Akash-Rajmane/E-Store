import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALE</h1>
                    <p>
                    Take total control with 7.1 Channel Surround Sound for superior audio immersion.
                     Get pinpoint positional accuracy of players and make your game come alive.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;

