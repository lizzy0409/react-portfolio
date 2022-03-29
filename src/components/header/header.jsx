import React from "react";
import "./header.css";
import CTA from "./cta";
import ME from "../../assets/me.png";
import HeaderSocials from "./headerSocials";

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Ennoukra Abdelghani</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="Me" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default header;
