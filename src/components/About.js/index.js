import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.css';
const About = () => {
    React.useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])
    return (
        <>
            <section className='about_section' id='about'>
                <div className="about_text" data-aos="zoom-out-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <h1>An international banking & money exchange platform that suits you</h1>
                    <p>We provide access to transfer and receive money from over 50+ countries with just a tap of your finger.</p>
                </div>

                <div className="about_cards">
                    <div className="about_card_item" data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img src="/images/about1.svg" alt="" />
                        <h3>Borderless Banking</h3>
                        <p>You can send, spend and receive money
                            across different countries and
                            currencies without incurring heavy fees.</p>

                        <button>
                            Get Started
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9091 7.23706L18 12.2371M18 12.2371L12.9091 17.2371M18 12.2371L6 12.2371" stroke="#005CEE" stroke-width="2" stroke-linecap="square" />
                            </svg>
                        </button>
                    </div>
                    <div className="about_card_item" data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img src="/images/about2.svg" alt="" />
                        <h3>Create Foreign virtual Account</h3>
                        <p>Create a euro and pound account
                            with zero hassles</p>

                        <button>
                            Get Started
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9091 7.23706L18 12.2371M18 12.2371L12.9091 17.2371M18 12.2371L6 12.2371" stroke="#005CEE" stroke-width="2" stroke-linecap="square" />
                            </svg>
                        </button>
                    </div>
                    <div className="about_card_item" data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img src="/images/about3.svg" alt="" />
                        <h3>Market Place
                            Currency Exchange</h3>
                        <p>Buy and sell different currencies on the RataFX market place at your own rate.</p>

                        <button>
                            Get Started
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9091 7.23706L18 12.2371M18 12.2371L12.9091 17.2371M18 12.2371L6 12.2371" stroke="#005CEE" stroke-width="2" stroke-linecap="square" />
                            </svg>
                        </button>
                    </div>
                </div>
                <br />
            </section>

        </>
    );
};

export default About;