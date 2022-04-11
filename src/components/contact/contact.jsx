import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // emailjs.sendForm("service_7vjh02d", "template_mdf3ozs", test, "");
        emailjs
            .sendForm(
                "service_7vjh02d",
                "template_mdf3ozs",
                form.current,
                "a2a-Cd8Wrn4QiObPi"
            )
            .then(
                (result) => {
                    alert(
                        "Message send, I will text you back soon as possible, Thank you."
                    );
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>ghaniennoukra@gmail.com</h5>
                        <a
                            href="mailto:ghaniennoukra@gmail.com"
                            target="_blank"
                        >
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>abdo ennoukra</h5>
                        <a href="https://m.me/abdo.ennoukra" target="_blank">
                            Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+212611961130</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=+212611961130"
                            target="_blank"
                        >
                            Send a Message
                        </a>
                    </article>
                </div>

                {/* end of the contact options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
