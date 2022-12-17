import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <div className="contact-container">
            <div className="contact-inner-container">
                <div className="contact-leftside">
                    <div className="contact-us">
                        <h2 className="contact-h1">Contact Us</h2>
                        <p className="contact-para">Class aptent taciti sociosqu ad litora torquent per conubia nostra
                            <br /> per inceptos himenaeos nam nec ante sed lacinia.<br />
                        </p>
                    </div>
                    <div className="contact-input-fields">
                        <div className="fl-field">
                            <input className="contact-input input-common" type="text" placeholder="First Name" />
                            <input className="contact-input input-common" type="text" placeholder="Last Name" />
                        </div>
                        <div className="your-email">
                            <input className="contact-email input-common" type="email" placeholder="Your Email" />
                        </div>

                        <div className="textarea-div">
                            <textarea className="textarea input-common" placeholder="Your Message"></textarea>
                        </div>
                        <div className="btn-div">
                            <button className="send-btn">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>

                <div className="contact-rightside">
                    <div className="contact-content">
                        <h2 className="contact-h1">Working Hours</h2>
                        <p className="contact-right-para contact-place">Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
                            lectus. Vivamus consectetuer risus et tortor.</p>
                        <div className="contact-place common-space">
                            <p>4582 North Street Name,
                                <br />Florida, FL 54785<br />
                            </p>
                        </div>
                        <div className="contact-details contact-place common-space">
                            <p>Phone: +111 22-33-444</p>
                            <p>Email: <span className="span-color">contact@youroceanwpsite.com</span></p>
                            <p>Web: <span className="span-color">+111 22-33-444</span></p>
                        </div>
                    </div>
                </div>







            </div>
        </div>
    )
}

export default ContactForm
