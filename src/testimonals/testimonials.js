import React from 'react';
import './testimonals.css';
// import Image8 from '../images/img05.jpg';
import Image9 from '../images/img04.png';


import { ReactComponent as LArrow } from '../images/left-arrow.svg';
import { ReactComponent as RArrow } from '../images/right-arrow.svg';

import Youtube from '../youtube-link/youtube';

class Testimonals extends React.Component {

  render() {
    return (
      <div className="main" id="Testimonials">
        <div className="Testimonial">
          <div className="container">
            <p2 id="main_h">More than <span className="text-bright">20,000+ Customers</span>,
           <br />see some wishes here.
           </p2>
       {/* ----------------slide show --------------------*/}
            <div id="demo" className="carousel slide" data-ride="carousel" >


              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="ArticleCopy">
                    <blockquote>

                      <div className="desc_slideshow">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                        lectorum. Mirum est notare quam littera gothica, </div>
                      <br />


                      <strong className="name">David Ramon</strong><br />
                      <span className="sub-name">Project Manager, D360-Studio</span>
                    </blockquote>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="ArticleCopy">
                    <blockquote>

                      <div className="desc_slideshow">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                                      lectorum. Mirum est notare quam littera gothica, </div>
                      <br />

                      <strong className="name">David Ramon</strong><br />
                      <span className="sub-name">Project Manager, D360-Studio</span>
                    </blockquote>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="ArticleCopy">
                    <blockquote>

                      <div className="desc_slideshow">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                        lectorum. Mirum est notare quam littera gothica, </div>
                      <br />

                      <strong className="name">David Ramon</strong><br />
                      <span className="sub-name">Project Manager, D360-Studio</span>
                    </blockquote>

                  </div>
                </div>
              </div>

              <a class="carousel-control-prev " href="#demo" role="button" data-slide="prev">
                <span class="left  round" aria-hidden="true"><LArrow fill="white" height='15px' /></span>
                <span class="sr-only">Next</span>
              </a>

              <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
                <span class="right round" aria-hidden="true"><RArrow fill="white" height='15px' /></span>
                <span class="sr-only">Previous</span>
              </a>
            </div>
            <div>
              
              <div className="aligncenter col-xs-12" >
                <img src={Image9} alt="description" className="img9-responsive" />
              </div>

              <div className="textsoft">
                <p className="customtxt">Our software is totally customisable and easy to use,<br/>
               <span className="text-bright">no need to know anything!</span></p>
                <a href="/i" className="btn-p">Purchase now</a>
              </div>

            </div>
          </div>
        </div>
        <div className="video">
          {/* <img src={Image8} alt="Snow" id="img8" className="img8-responsive" /> */}

          
            <Youtube />
            
            {/* <a href="http://www.youtube.com/embed/9bZkp7q19f0?autoplay=1" > */}
              
        </div>
      </div>



    );
  }
}
export default Testimonals;
