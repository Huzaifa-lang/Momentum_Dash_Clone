import React from 'react'
import '../cssofMainpage/Explore.css'

function Explore() {
  return (
    <section id='Explore'>
            <div className="explore-container">

                <p className='features-heading'>Explore</p>


                <div className="explore-packages">

                    <div className="package"  id='package1'>

                        <p className='package-title'>LATEST FROM THE BLOG</p>

                        <div className="package-main-container">
                            <p>Introducing AI into Momentum Da.. <br /> <span>Integrate AI into your daily workflow</span></p>
                            <div className="package-image">
                                <img src="public/explore_image_1.jpeg" alt="" id='explore-image-1'/>

                            </div>


                        </div>

                    </div>

                    <div className="package" id='package2'>

                <p className='package-title'>DO MORE WITH PLUS</p>

                <div className="package-main-container">
                <p>Momentum Plus<br /> <span>Power up your dashboard.</span></p>


                    <div className="package-image">
                    <img src="public/explore_image_2 (1).jpg" alt="" id='explore-image-2'/>


                    </div>


                </div>

                    </div>

                    
                    <div className="package" id='package3'>

                    <p className='package-title'>NEW!<span>MOMENTUM FOR YOUR TEAM</span></p>

                    <div className="package-main-container">
                    <p>Momentum for Teams<br /> <span>Get on the same page.</span></p>

                        <div className="package-image">
                        <img src="public/explore_image_3.jpg" alt="" id='explore-image-3'/>


                        </div>


                    </div>

                    </div>


                </div>

                <p className='features-heading' id='explore-botton-description'>Turn your potential into progress.</p>
            </div>

    </section>
  )
}

export default Explore