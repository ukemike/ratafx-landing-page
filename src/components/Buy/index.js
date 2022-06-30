import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./index.css";
const Buy = () => {
    React.useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])
    return (
        <>
            <>

            <section className='buy_section'>
                <div className='buy_section_container'>
                    <div className='buy_section_container_text' data-aos="zoom-out-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h1>Buy and sell with the lowest fees in the industry</h1>
                        <p>Buy and sell currencies on the RataFX P2P marketplace at your own rate</p>
                        <button>
                            Learn More
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9091 7.89307L18 12.8931M18 12.8931L12.9091 17.8931M18 12.8931L6 12.8931" stroke="#005CEE" stroke-width="2" stroke-linecap="square" />
                            </svg>
                        </button>
                    </div>

                    <div className='buy_section_container_image' data-aos="zoom-out-down" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img src="/images/table.svg" alt="" />
                    </div>
                </div>
            </section>

            </>
        </>
    );
};

export default Buy;