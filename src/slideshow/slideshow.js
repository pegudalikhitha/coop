import React, {Component} from 'react';
import Slider from 'react-slick';
import './slideshow.css';

import Image11 from '../images/logo-1.jpg';
import Image12 from '../images/logo-2.jpg';
import Image13 from '../images/logo-3.jpg';
import Image14 from '../images/logo-4.jpg';
import Image15 from '../images/logo-5.jpg';
import Image16 from '../images/logo-6.jpg';


export default class AutoPlay extends Component {  
    render() {
      const settings = {
        // dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        variablewidth:true,
        // cssEase: "linear",      
      responsive: [
        {
          breakpoint: 900,
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
            breakpoint: 760,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

  ]};
      
      return (
        <div className="slideshow">
         <div className="container">   
            <Slider {...settings}>
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