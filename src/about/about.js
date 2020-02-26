import React from 'react';
import '../App.css';
import './about.css';
import Image7 from '../images/img3.png';
import Counter from '../counter/counter';
import  Counter_Theme from '../counter/counter_Theme';

class About extends React.Component {

  render() {
    return (
      <div className="main" id="About">

        <div className="sameheight-container aboutcont" >
          {/* <!-- Descr of the page --> */}
          <div className="same-height-left"  >

            <div className="left_txt">
              <div className="primarytxt">
                <p>No more confusion and complex to manage your office.</p>
              </div>
              <div className="secondarytxt">
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
              </div>
              <div className="table_counter">
                <div className="components">
                  <span  id="firstrow"><Counter /></span>
                  <span   id="flex_second_row_color">COMPONENTS</span>
                </div>
                <div className="Themes">
                  <span className=" d-flex" id="firstrow"> <Counter_Theme className="manage"/> <div className="manage">+</div></span>
                  <span  id="flex_second_row_color">THEMES</span>
                </div>
                <div className="users">
                  <span  id="firstrow">Unlimited</span><br/>
                  <span  id="flex_second_row_color">USERS</span>
                </div>
              </div>
              {/* <div className="table_counter">
                <div className="flex-container" id="firstrow">
                  <div className="components"><Counter /></div>
                  <div className="Themes d-flex">
                    <Counter_Theme/>
                    <div>+</div>
                  </div>
                  <div className="users">Unlimited</div>
                </div>
                <div className="flex-container">
                  <div className="components" id="flex_second_row_color">COMPONENTS</div>
                  <div className="Themes" id="flex_second_row_color">THEMES</div>
                  <div className="users" id="flex_second_row_color">USERS</div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="img-holder col-xs-12 col-sm-12 col-md-6 same-height-right" >
            <img src={Image7} alt="description" className="img7-responsive" />
          </div>
        </div>

        <div className="demo-block">
          <div className="container">
            <div className="flex-container-1">
              <div className="flextxt">
                <p className="main_block_txt">Need a perfect software to manage everything?</p>
                <p className="secondary_block_txt">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam.</p>
              </div>
              <div className="block">
              <div><button className="btnpurchase" type="submit">Purchase Now</button></div>
              <div className="margin-btn"><a href="/i" className="trylink">Try Our Demo</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>


    );
  }
}

export default About;
