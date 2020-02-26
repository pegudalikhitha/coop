import React, {Component} from 'react';
import Slider from 'react-slick';

import Image11 from '../images/logo-1.jpg';
import Image12 from '../images/logo-2.jpg';
import Image13 from '../images/logo-3.jpg';
import Image14 from '../images/logo-4.jpg';
import Image15 from '../images/logo-5.jpg';
import Image16 from '../images/logo-6.jpg';
import './slideshow.css'


export default class AutoPlay extends Component {  
    render() {
      const settings = {
        // dots: true,
        infinite: true,
        // centerMode: linear,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        variablewidth:true,
        // cssEase: "linear",      
      responsive: [
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
          }
      },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

  ]};
      
      return (
        <div className="slideshow">
         <div className="container">   
            <Slider 
            {...settings}
            >
            <div className="slide-icon">        
              <img src={Image11}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image12}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image13}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image14}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image15}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image16}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">             
              <img src={Image11}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image12}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image13}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image14}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image15}alt="description" className="img-margin" />
            </div>
            <div className="slide-icon">
            <img src={Image16}alt="description" className="img-margin" />
            </div>
           
          </Slider>
          </div>
        </div>
      );
    }
  }