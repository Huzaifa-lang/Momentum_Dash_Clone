import React from 'react'
import '../cssofMainpage/Features.css'

function Features() {
  return (
    <section id='Features'>
        <div className="features-container">

            <div className="daily-inspiration-container">
                <div className="daily-description">
                <p className='features-heading'>Daily<br/>inspiration</p>

                </div>

                <div className="daily-inspiration-images">
                    <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nature_image" id='img1'/>
                    <div id='image-with-quote'>
                      <div className="overlay">
                      <p>”A stumble may prevent a fall.“ <br /><span>GRETCHEN RUBIN</span></p>


                      </div>

                    {/* <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nature_image" id='img2'/> */}

                    </div>
                    
                    <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nature_image" id='img3'/>
                    
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="nature_image" id='img4'/>

                </div>

            </div>

            <div className="daily-foucs-container">

              <div className="daily-focus-images">

                  <div className="daily-focus-backbox">
                    <p>TODAY <br /> Launch new <br />website</p>
                  </div>

                  <div className="daily-focus-frontbox">

                    <p>What is your main <br />focus for today</p>
                    <hr />
                  </div>



              </div>

              
              <div className="daily-focus-description">

              <p className='features-heading'>Daily focus</p>

              </div>

            </div>

            <div className="todo-list-container">

              <div className="todo-list-description">
                <p className='features-heading'>To-do list</p>
              </div>

              <div className="todo-list-images">

                <div className="todo-list-firstbox">
                  <p id='todo-list-firstbox-2'>2</p>
                  <p id='todo-list-firstbox-text'>Complete</p>
                </div>

                <div className="todo-list-secondbox">

                  <div id='list-container'>

                      <p>List</p>
                      <i class="ri-arrow-down-s-line"></i>

                  </div>

                  <div id='first-todo' class="todo-design">

                    <i class="ri-checkbox-fill" id='icon'></i>
                    <p>Morning meditation</p>

                  </div>

                  
                  <div id='second-todo' class="todo-design">

                    <i class="ri-checkbox-fill" id='icon'></i>
                    <p >Quarterly meeting</p>

                  </div>

                  
                  <div id='third-todo' class="todo-design">

                    <i class="ri-checkbox-blank-line" id='icon'></i>
                    <p className='todo-long-text'>30 minutes of email catch-up</p>

                  </div>

                  
                  <div id='fourth-todo' class="todo-design">

                  <i class="ri-checkbox-blank-line" id='icon'></i>
                  <p id='botton-margin-oftext' className='todo-long-text'>Review Monica's latest edit</p>

                  </div>

                  
                  <div id='fifth-todo' class="todo-design">

                  <i class="ri-checkbox-blank-line" id='icon'></i>
                    <p className='todo-long-text'>Prepare presentaion</p>

                  </div>

                  
                  <div id='sixth-todo' class="todo-design">

                  <i class="ri-add-line" id='icon'></i>
                    <p >New Todo</p>

                  </div>


                  

                </div>

                <div className="todo-list-thirdbox">
                  <p>Todo</p>
                </div>


              </div>


            </div>

            <div className="links-bookmark-container">
              
              <div className="links-bookmark-images">

                <div className="links-bookmark-bigbox">

                    <div className="links-bookmark-icons">
                    <i class="ri-checkbox-blank-fill"></i>
                    <span id='links-bookmark-span'></span>
                    </div>

                    <div className="links-bookmark-icons">
                    <i class="ri-checkbox-blank-fill"></i>
                    <span id='links-bookmark-span'></span>
                    </div>

                    <div className="links-bookmark-icons">
                    <i class="ri-checkbox-blank-fill"></i>
                    <span id='links-bookmark-span'></span>
                    </div>

                    <div className="links-bookmark-icons">
                    <i class="ri-checkbox-blank-fill"></i>
                    <span id='links-bookmark-span'></span>
                    </div>

                    <div className="links-bookmark-icons">
                    <i class="ri-checkbox-blank-fill"></i>
                    <span id='links-bookmark-span'></span>
                    </div>

                    <div className="links-bookmark-newlink">
                    <i class="ri-add-line"></i>
                    <p>New Link</p>
                    </div>

                </div>

                <div className="links-bookmark-smallbox">
                  <p>Name</p>
                  <p>Address</p>
                </div>

              </div>


              
              <div className="links-bookmark-description">
                  <p className='features-heading'>Links and<br />Bookmarks</p>
                </div>

            </div>

            <div className="weather-container">

              <div className="weather-description">
                <div className="features-heading">Weather <br />and more</div>
              </div>

              <div className="weather-images">

                <div className="weather-upperbox">
                  <p id='weather-percentage'>51%</p>
                  <p>Good afternoon, Sam</p>

                </div>

                <div className="weather-middlebox">

                    <div className="weather-location">
                      <p id='weather-location-name'>Seattle</p>
                      <p id='weather-location-descrip'>Sunny</p>
                    </div>

                    <div className="weather-temperature">

                    <i class="ri-sun-line"></i>
                    <p>77°</p>

                    </div>

                    <div className="weather-week">

                      <div className="weather-day">
                        <p className='weather-day-date'>MON</p>
                        <p className='first-temperature'>81° <span className='second-temperature'>57°</span></p>
                      </div>

                      <div className="weather-day">
                        <p className='weather-day-date'>TUE</p>
                        <p className='first-temperature'>74° <span className='second-temperature'>56°</span></p>
                      </div>

                      <div className="weather-day">
                        <p className='weather-day-date'>WED</p>
                        <p className='first-temperature'>76° <span className='second-temperature'>58°</span></p>
                      </div>

                      <div className="weather-day">
                        <p className='weather-day-date'>THU</p>
                        <p className='first-temperature'>81° <span className='second-temperature'>57°</span></p>
                      </div>

                      <div className="weather-day">
                        <p className='weather-day-date'>FRI</p>
                        <p className='first-temperature'>80° <span className='second-temperature'>55°</span></p>
                      </div>

                    </div>


                </div>

                <div className="weather-lastbox">
                  <div className="weather-search">
                  <i class="ri-search-line"></i>
                  <p>Search</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="plus-reminder">
              <div className="plus-reminder-container">


              <div className="plus-description">
                <p>Do more with Plus</p>
              </div>

              <div className="plus-features">

                <div className="plus-features-details">
                  <i class="ri-brush-fill"></i>
                  <p>Customize</p>
                </div>
                
                <div className="plus-features-details">

                <i class="ri-organization-chart"></i>
                <p>Integration</p>
                </div>

                <div className="plus-features-details">

                <i class="ri-organization-chart"></i>
                <p>Power-Ups</p>
                </div>

              </div>

              <div className="plus-arrow">
              <i class="ri-arrow-right-s-line"></i>

              </div>

              </div>


            </div>


        </div>
    </section>
  )
}

export default Features