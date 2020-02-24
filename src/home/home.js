import React from 'react';
import './home.css';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

class Home extends React.Component {
  render() {
    return (
      <div className="main" id="Home">

        <div className="hom" >

          <div class="testrow">
            <div className="container">
            
              <div class="heading-holder col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3" id="hero_banner">

                <div className="txt-small">best software for your office</div>
                <div className="highlighting_heading">Try Cooper Today!</div>
                <div className="short_desc">Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

                <div class="row" id="homebtn">
                  <button type="submit" className="btn2">Learn More</button>
                  <button href="#" type="submit" className="btn3">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
