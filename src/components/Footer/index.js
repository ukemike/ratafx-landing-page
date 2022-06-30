import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const Footer = () => {
  return (
    <>
        <section className='footer_section'>
            <div className="footer_section_container">
                <div className="footer_left">
                  <div className="logo_footer">
                      <img src="/images/logo.png" alt="" />
                  </div>
                  <div className="address">
                    <p>2055 Limestone Rd, Wilmington, Delaware 19808, US</p>
                  </div>

                  <div className="telephon">
                    <p>+1 (434) 546-4356</p>
                  </div>

                  <div className="email">
                    <p>developers@ratafx.com</p>
                  </div>

                  <div className="right">
                    <p>© 2022 Rata Technologies Inc. All rights reserved.</p>
                  </div>


                </div>
                <div className="footer_right">
                  <div className="who_we_are">
                    <p>Who we are</p>
                   <div className='whos'>
                   <Link to="#">About</Link>
                    <Link to="#">How It Works</Link>
                    <Link to="#">Contact Us</Link>
                    <Link to="#">AML Policies</Link>
                    <Link to="#">Privacy Policy</Link>
                   </div>
                  </div>

                  <div className="who_we_are">
                    <p>Socials</p>
                    <div className='whos'>
                    <Link to="#">Facebook</Link>
                    <Link to="#">Twitter</Link>
                    <Link to="#">Linkedin</Link>
                    <Link to="#">Instagram</Link>
                    <Link to="#">Telegram</Link>
                    
                    </div>
                  </div>
                </div>

                <div className="right2">  
                  <p>© 2022 Rata Technologies Inc. All rights reserved.</p>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Footer







