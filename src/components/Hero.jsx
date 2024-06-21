import React, { useEffect } from 'react'
import '../cssofMainpage/Hero.css'







function hero() {

  const images = [
    '/public/Hero-image-1.jpg',
    '/public/Hero-image-2.jpg',
    '/public/Hero-image-3.jpg'
  ];

  const [currentIndexImage, setcurrentIndexImage] = React.useState(0);
  const [fade, setFade] = React.useState(false); // State to toggle fade-in effect


  React.useEffect(() => {

    const interval = setInterval(() => {

      setFade(false);


      setTimeout(() => {
        setcurrentIndexImage((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); 
        
      }, 1000);

    }, 2000);
  
    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  
  return (
    <>
    <section className= 'hero'>
      <div className="hero-container">


          <div className="hero-text-container">

            <div className="hero-text">
                        <h1>Your space <br />for <span></span></h1>
                        <p id='hero-text-description'>Turn your potential into progress with <br /> a beautifully simple start page.</p>
                        <button id='btn'><span>+ Add to Chrome </span>it's free!</button>
                        <div className="review-container">
                          <div className="review">

                          <div className="review-icons">
                        <a href=""><i class="ri-star-s-fill"></i></a>
                        <a href=""><i class="ri-star-s-fill"></i></a>
                        <a href=""><i class="ri-star-s-fill"></i></a>
                        <a href=""><i class="ri-star-s-fill"></i></a>
                        <a href=""><i class="ri-star-half-s-fill"></i></a>
                        
                        </div>
                          <p id='app-installed'><span>13,000+</span> Chrome store reviews</p>
                          </div>
                        
                        <p id='active-users'><span>3+ million</span> active users</p>

                        </div>
            </div>
          </div>

          <div className="hero-img-container">

            <div className="hero-imgs">

<img src="/Hero-image-1.jpg" alt="" />
<img src="/Hero-image-2.jpg" alt="" />
<img src="/Hero-image-3.jpg" alt="" />



            </div>
      
            </div>

    </div>


    </section>
    </>
  )
}

export default hero