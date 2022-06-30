import React from 'react'
import './index.css'
const NewsLetter = () => {
  return (
    <>
        <section className='newsletter_section'>
            <div className='newsletter_container'>
                <div className='newsletter_title'>
                    <h2>Subscribe To Our Newsletter</h2>
                    <p>Subscribe to our newsletter to stay updated on our latest new and updates</p>
                </div>

                <div className='newsletter_form'>
                    <form>
                        <div className="news_letter_input_wrap">

                           <div className="input_wrap">
                           <label>Email Address</label>
                            <input type="text" placeholder="Enter your email" />
                           </div>

                           <div className="input_button">
                           <button>Subscribe</button>
                           </div>

                        </div>
                    </form>
                </div>

            </div>
            
        </section>
    
    </>
  )
}

export default NewsLetter