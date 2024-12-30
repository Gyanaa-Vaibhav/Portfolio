import React from "react";
import './Contact.css'

export default function ContactMe() {
    return (
        <>
            <div style={{position: "relative"}}>
                <div className='proj' id="contactMe"></div>
                <section className="contact-section" id="contact">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out to me anytime!</p>

                    {/* Contact Form */}
                    {/*<form className="contact-form">*/}
                    {/*    <input type="text" name="name" placeholder="Your Name" required/>*/}
                    {/*    <input type="email" name="email" placeholder="Your Email" required/>*/}
                    {/*    <input type="text" name="subject" placeholder="Subject"/>*/}
                    {/*    <textarea*/}
                    {/*        name="message"*/}
                    {/*        rows="5"*/}
                    {/*        placeholder="Your Message"*/}
                    {/*        required*/}
                    {/*    ></textarea>*/}
                    {/*    <button type="submit">Send Message</button>*/}
                    {/*</form>*/}

                    {/* Contact Details */}
                    <div className="contact-details">
                        <p>Email: <a href="mailto:gynanrudr0@gmail.com">gyanarudr0@gmail.com</a></p>
                        <p>Phone: <a href="tel:+919380034009">+91 93800 34009</a></p>
                        <p>Location: Karnataka, India</p>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/gyanaa-vaibhav1/" target="_blank"
                           rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Gyanaa-Vaibhav" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}