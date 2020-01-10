import React from 'react';
import './testimonals.css';
import Image8 from '../images/img05.jpg'
import Image9 from '../images/img04.png'
import {ReactComponent as LArrow} from '../images/left-arrow.svg'
import {ReactComponent as RArrow} from '../images/right-arrow.svg'
import {ReactComponent as Playbtn} from '../images/play-button.svg'

class Testimonals extends React.Component{

    render() {
        return (
            <div>
                <div>

<h2>More than <span className="text-bright" style={{color:'#33cccc'}}>20,000+ Customers</span>, <br/>see some wishes here.</h2>

<div id="demo" className="carousel slide" data-ride="carousel" > 


<div className="carousel-inner">
           <div className="carousel-item active">
                      <div className="ArticleCopy">
                           <blockquote>
                                      <q>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium<br/> 
                  lectorum. Mirum est notare quam littera gothica, </q>
                  <br/>

                                      <cite>
                                          <strong className="name">David Ramon</strong><br/>
                                          <span className="subtitle">Project Manager, D360-Studio</span>
                                      </cite>

                                  </blockquote>
                         </div>
                   </div>

            <div className="carousel-item">
               <div className="ArticleCopy">
                  <blockquote>
                  <q>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium<br/> 
                  lectorum. Mirum est notare quam littera gothica, </q>
                  <br/>
                  <cite>
                    <strong className="name">David Ramon</strong><br/>
                    <span className="subtitle">Project Manager, D360-Studio</span>
                  </cite>
                </blockquote> 
               </div>
            </div>
  
    <div className="carousel-item">
           <div className="ArticleCopy">
              <blockquote>
                  <q>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium<br/> 
                  lectorum. Mirum est notare quam littera gothica, </q>
                  <br/>

                  <cite>
                    <strong className="name">David Ramon</strong><br/>
                    <span className="subtitle">Project Manager, D360-Studio</span>
                  </cite>

                </blockquote> 

            </div>
     </div>
</div>



{/* <!-- Left and right controls --> */}
{/* <a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon">hello</span>
</a>

<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a> */}

<a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
            <span class="left" aria-hidden="true"><LArrow fill="black" height='20px' /></span>
            <span class="sr-only">Next</span>
        </a>

        <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
            <span class="right" aria-hidden="true"><RArrow fill="black" height='20px' /></span>
            <span class="sr-only">Previous</span>
        </a>


</div>

     <div>
            <div className="aligncenter col-xs-12" >
              <img src={Image9} alt="image description" className="img-responsive"  />
            </div>

          <div  className="textsoft">
            <p className="customtxt">Our software is totally customisable and <br/>easy to use, <span className="text-bright">no need to know anything!</span></p>
            <a href="#" className="btn btn-info">Purchase now</a>
          </div>

      </div>
</div>

<div className="video">
<img src={Image8} alt="Snow"  className="img-responsive"  />

<div className="centered-play">
  <a href="http://www.youtube.com/embed/9bZkp7q19f0?autoplay=1" >
  <Playbtn height='40px'/></a></div>
</div>
</div>

            
            
        );
    }
}
export default Testimonals;
