import React from 'react';
import './home.css';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

class Home extends React.Component {
  render() {
    return (
      <div className="main" >
        
          <div className="hom" >

            <div class="testrow">
              <div class="col-8" id="hometxt">

                <div className="txt-small">best software for your office</div><br />
                <h1 className="Try">Try Cooper Today!</h1><br />
                <p className="p1">Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy <br />nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br /> volutpat.</p>

                <div class="row" id="homebtn">
                  <button type="submit" className="btn2">Learn More</button>
                  <button href="#" type="submit" className="btn2">Download</button></div>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export default Home;
