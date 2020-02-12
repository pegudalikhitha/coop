import React from 'react';
import '../App.css';
import './about.css';
import Image7 from '../images/img3.png';

class About extends React.Component {

  render() {
    return (
      <div className="main" id="About">
        <div className="row sameheight-container" >
          {/* <!-- Descr of the page --> */}
          <div className="col-xs-12 col-sm-6 descr sameheight same-height-left" >
            <div className="left_txt">
              <div className="primarytxt">
                <p>No more confusion and complex to manage your office.</p>
              </div>
              <div className="secondarytxt">
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
              </div>
              <div className="table_counter">
                <div class="flex-container" id="firstrow">
                  <div class="components">229</div>
                  <div class="Themes">10</div>
                  <div class="users">Unlimited</div>
                </div>
                <div class="flex-container">
                  <div class="components" id="flex_second_row_color">COMPONENTS</div>
                  <div class="Themes" id="flex_second_row_color">THEMES</div>
                  <div class="users" id="flex_second_row_color">USERS</div>
                </div>
              </div>

            </div>
          </div>

          <div className="img-holder sameheight col-xs-12 col-sm-6 same-height-right" style={{ minheight: '489px' }}>
            <img src={Image7} alt="description" className="img7-responsive" />
          </div>

          <div className="demo-block">
            <div class="flex-container-1">
              <div class="flextxt"><p className="main_block_txt">Need a perfect software to manage everything?</p>
                <p className="secondary_block_txt">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam.</p>
              </div>
              <div ><button className="btnpurchase" type="submit">Purchase Now</button></div>
              <div className="margin-btn"><a href="/i" className="trylink">Try Our Demo</a></div>
            </div>
          </div>


        </div>
      </div>

    );
  }
}

export default About;
