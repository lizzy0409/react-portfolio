import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
// import IMG7 from "../../assets/portfolio7.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Design and development of a web application dedicated to absence management",
        github: "https://github.com/ennoukra",
        dimo: "hello world",
    },
    {
        id: 2,
        image: IMG2,
        title: "Creating a Notes Management Web Application",
        github: "https://github.com/ennoukra",
        dimo: "hello world",
    },
    {
        id: 3,
        image: IMG3,
        title: "Student Management Desktop Application",
        github: "https://github.com/ennoukra",
        dimo: "hello world",
    },
    {
        id: 4,
        image: IMG4,
        title: "Medical Prescription Management Web Application",
        github: "https://github.com/ennoukra",
        dimo: "hello world",
    },
    {
        id: 5,
        image: IMG5,
        title: "TodoList App",
        github: "https://github.com/ennoukra",
        dimo: "hello world",
    },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: "Crypto Currency Dashbord & Financial Visualization",
    //     github: "https://github.com/ennoukra",
    //     dimo: "hello world",
    // },
];
const portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Porfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, github, title }) => {
                    return (
                        <article className="portfolio__item">
                            <div>
                                <img
                                    src={image}
                                    alt=""
                                    className="portfolio__item-image"
                                />
                            </div>
                            <h3>{title}</h3>
                            <a href={github} className="btn" target="_blank">
                                Github
                            </a>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default portfolio;
