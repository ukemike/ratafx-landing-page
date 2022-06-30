import React from 'react';
import "./index.css";

const Contact = () => {
    return (
        <>
            <section className='contact_section' id='contact'>
                <div className='contact_section_container'>

                    <div className="contact_text">
                        <h1>Contact Us</h1>
                        <p>Need to get in touch with us? Either fill out the form with your
                            inquiry or click here to send an email and you’d be attended to.</p>
                    </div>

                    <div className="contact_form">
                        <form action="">
                            <div className="form_row">
                               <div className='form_2'>
                               <label htmlFor="name">First Name*</label>
                                <input type="text" id="name" />
                               </div>

                              <div className='form_2'>
                              <label htmlFor="email">Last Name*</label>
                                <input type="text" id="email" />
                              </div>
                            </div>

                            <div className="form_row">
                               <div className='form_2'>
                               <label htmlFor="message">Email</label>
                                <input type="email" />
                               </div>
                            </div>

                            <div className="form_row">
                                <div className='form_2'>
                                <label htmlFor="message">How may we be of assistance?</label>
                                <textarea id="message" rows="10" cols="30"></textarea>
                                </div>
                            </div>
                            
                            <div className="form_row">
                                <div className='form_2'>
                                <button type="submit">Send</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </section>

        </>
    );
};

export default Contact;