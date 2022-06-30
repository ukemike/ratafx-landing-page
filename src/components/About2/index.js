import React from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.css';

const About2 = () => {
    React.useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])
    return (
        <>
            <section className='about2_section'>

                <div className='about2_container'>

                    <div className="about2_text" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h1>Take your first step  into safe,
                            secure means of Banking &
                            p2P currency exchange</h1>
                        <p>Your account and transactions on our app are protected with bank-grade end to end encryption, which means that your money and transactions are safe and secure</p>

                        <div className="about2_btn">
                            <button className="btn">Get Started</button>
                        </div>
                    </div>

                    <div className="about2_img" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img src="/images/brief.svg" alt="" />
                    </div>

                </div>

                <br />
                <br />
                <br />
                <br />

                <div className='about2_containers'>

                    <div className="about2_img" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img src="/images/phone.svg" alt="" />
                    </div>
                    <span className='space'></span>
                    <div className="about2_text" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h1>Safe and Secure Means to Swap, Send and Receive Money</h1>
                        <p>Download the app to send, receive and swap at your own rate</p>

                        <div className="about2_btn">
                            <Link to="#">
                                <img src="/images/play1.svg" alt="" />
                            </Link>
                            <Link to="#">
                                <img src="/images/play1.svg" alt="" />
                            </Link>
                        </div>
                    </div>



                </div>

            </section>
        </>
    );
};

export default About2;