import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const headerSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="#"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a href="#" target="_blank">
                <FaGithub />
            </a>
            {/* <a href="https://linkedin.com" target="_blank">
                <FiDribbble />
            </a> */}
        </div>
    );
};

export default headerSocials;
/*
 *@documentaion
 *
 * @arguments
 */
