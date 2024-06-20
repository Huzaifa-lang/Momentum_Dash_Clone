import React from 'react'
import'../cssofMainpage/Footer.css'

function Footer() {
  return (
    <section id='Footer'>
        <div className="footer-container">

            <div className="footer-tags-container">

                <div className="footer-tags-container-1">

                    
                <div className="footer-tags">
                        <p>MOMENTUM</p>
                        <ul>
                            <li>Plus</li>
                            <li>For Team</li>
                            <li>Download</li>
                            <li>Newsletter</li>
                            <li>Release Notes</li>

                        </ul>

                    </div>

                    
                    <div className="footer-tags">
                        <p>Contact</p>
                        <ul>
                            <li>Join a Workshop</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li>Partner with Us</li>

                        </ul>

                    </div>

                </div>

                
                <div className="footer-tags-container-2">

                    
                <div className="footer-tags">
                        <p>Support</p>
                        <ul>
                            <li>Help Center</li>
                            <li>Account</li>
                            <li>Gift Plus</li>

                        </ul>

                    </div>

                    
                    <div className="footer-tags">
                        <p>Follow us</p>
                        <ul>
                            <div className="social-media">
                                <a href=""><i class="ri-instagram-line"></i></a>
                                <h4 className='social-media-icon'>Instagram</h4>
                            </div>

                            <div className="social-media">
                                <a href=""><i class="ri-facebook-fill"></i></a>
                                <h4 className='social-media-icon'>Facebook</h4>
                            </div>

                            <div className="social-media">
                                <a href=""><i class="ri-twitter-x-line"></i></a>
                                <h4 className='social-media-icon'>Twitter</h4>
                            </div>

                        </ul>

                    </div>

                </div>


            </div>

            <div className="footer-copyrights">
                <img src="public/logo.svg" alt=""/>
                <p>Privacy & Legal</p>
            </div>

        </div>
    </section>
  )
}

export default Footer