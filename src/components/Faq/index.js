import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.css';

const Faq = () => {

    React.useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])

    const [toggleFaq, setToggleFaq] = React.useState(true);
    const [toggleFaq1, setToggleFaq1] = React.useState(false);
    const [toggleFaq2, setToggleFaq2] = React.useState(false);
    const [toggleFaq3, setToggleFaq3] = React.useState(false);

    const toggleFaqHandler = (e) => {
        e.stopPropagation();
        setToggleFaq(!toggleFaq);
        setToggleFaq1(false);
        setToggleFaq2(false);
        setToggleFaq3(false);
    }

    const toggleFaqHandler1 = (e) => {
        e.stopPropagation();
        setToggleFaq(false);
        setToggleFaq1(!toggleFaq1);
        setToggleFaq2(false);
        setToggleFaq3(false);
    }

    const toggleFaqHandler2 = (e) => {
        e.stopPropagation();
        setToggleFaq(false);
        setToggleFaq1(false);
        setToggleFaq2(!toggleFaq2);
        setToggleFaq3(false);
    }

    const toggleFaqHandler3 = (e) => {
        e.stopPropagation();
        setToggleFaq(false);
        setToggleFaq1(false);
        setToggleFaq2(false);
        setToggleFaq3(!toggleFaq3);
    }
    

   

    return (
        <>
            <section className='faq_section' id='faq'>
                <div className='faq_container'>
                    <div className='faq_title'>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className='faq_content'>
                        <div className='faq_item' onClick={toggleFaqHandler} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <div className="close_faq" onClick={toggleFaqHandler}>
                                {toggleFaq ? <svg width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleFaqHandler} style={{cursor: "pointer"}}>
                                    <path d="M18.5 2.5V0.5H10.4H8.6H0.5V2.5H8.6H10.4H18.5Z" fill="#262F56" />
                                </svg>
                                    : <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleFaqHandler} style={{cursor: "pointer"}}>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 8.6V10.4H10.4V18.5H8.6V10.4H0.5V8.6H8.6V0.5H10.4V8.6H18.5Z" fill="#262F56" />
                                    </svg>
                                }
                            </div>
                            <div className='faq_question'>
                                <h3>How do i open a foreign account?</h3>
                            </div>
                            <div className='faq_answer' style={{ display: toggleFaq === true ? "block" : "none" }}>
                                <p>Create a free foreign account where you have access to a US Dollar, Euro and Pounds account by downloading and signing up on the RataFX app for free. They are available on playstore for android and Appstore for iOS.</p>
                            </div>

                        </div>

                        <div className='faq_item' onClick={toggleFaqHandler1} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <div className="close_faq" onClick={toggleFaqHandler1}>
                                {toggleFaq1 ? <svg width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor: "pointer"}} onClick={toggleFaqHandler1}>
                                    <path d="M18.5 2.5V0.5H10.4H8.6H0.5V2.5H8.6H10.4H18.5Z" fill="#262F56" />
                                </svg>
                                    : <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor: "pointer"}} onClick={toggleFaqHandler1}>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 8.6V10.4H10.4V18.5H8.6V10.4H0.5V8.6H8.6V0.5H10.4V8.6H18.5Z" fill="#262F56" />
                                    </svg>
                                }
                            </div>
                            <div className='faq_question'>
                                <h3>Are there any hidden charges?</h3>
                            </div>
                            <div className='faq_answer' style={{ display: toggleFaq1 === true ? "block" : "none" }}>
                                <p>Create a free foreign account where you have access to a US Dollar, Euro and Pounds account by downloading and signing up on the RataFX app for free. They are available on playstore for android and Appstore for iOS.</p>
                            </div>

                        </div>

                        <div className='faq_item' onClick={toggleFaqHandler2} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <div className="close_faq" onClick={toggleFaqHandler2}>
                                {toggleFaq2 ? <svg width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor: "pointer"}} onClick={toggleFaqHandler2}>
                                    <path d="M18.5 2.5V0.5H10.4H8.6H0.5V2.5H8.6H10.4H18.5Z" fill="#262F56" />
                                </svg>
                                    : <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor: "pointer"}} onClick={toggleFaqHandler2}>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 8.6V10.4H10.4V18.5H8.6V10.4H0.5V8.6H8.6V0.5H10.4V8.6H18.5Z" fill="#262F56" />
                                    </svg>
                                }
                            </div>
                            <div className='faq_question'>
                                <h3>can i send money to someone in another country?</h3>
                            </div>
                            <div className='faq_answer' style={{ display: toggleFaq2 === true ? "block" : "none" }}>
                                <p>Create a free foreign account where you have access to a US Dollar, Euro and Pounds account by downloading and signing up on the RataFX app for free. They are available on playstore for android and Appstore for iOS.</p>
                            </div>

                        </div>

                        <div className='faq_item' onClick={toggleFaqHandler3} data-aos="flip-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <div className="close_faq" onClick={toggleFaqHandler3}>
                                {toggleFaq3 ? <svg width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor: "pointer"}} onClick={toggleFaqHandler3}>
                                    <path d="M18.5 2.5V0.5H10.4H8.6H0.5V2.5H8.6H10.4H18.5Z" fill="#262F56" />
                                </svg>
                                    : <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" style={{cursor: "pointer"}} onClick={toggleFaqHandler3}>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 8.6V10.4H10.4V18.5H8.6V10.4H0.5V8.6H8.6V0.5H10.4V8.6H18.5Z" fill="#262F56" />
                                    </svg>
                                }
                            </div>
                            <div className='faq_question'>
                                <h3>How safe is it?</h3>
                            </div>
                            <div className='faq_answer' style={{ display: toggleFaq3 === true ? "block" : "none" }}>
                                <p>Create a free foreign account where you have access to a US Dollar, Euro and Pounds account by downloading and signing up on the RataFX app for free. They are available on playstore for android and Appstore for iOS.</p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </section>

        </>
    );
};

export default Faq;