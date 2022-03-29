import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const headerSocials = () => {
    // TODO: install react incons form react icon

    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://linkedin.com" target="_blank">
                <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank">
                <FiDribbble />
            </a>
        </div>
    );
};

export default headerSocials;
/*
 *@documentaion
 *
 * @arguments
 */
