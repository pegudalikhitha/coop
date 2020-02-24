
import React from 'react';
import './footer.css';

import '../App.css';
import Image from '../images/logo2_cooper.png';


class Footer extends React.Component {

  render() {
    return (
      <div className="main">
        <footer className="mainfooter" role="contentinfo">
          <div className="footer-middle">
            <div className="container">
              <div className="text-center">
                <img src={Image} width="132" height="38" alt="" />
                <p className="footer_txt">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel <br/>illum dolore</p>
             </div>

              <div className="icons">


                <ul className="social-network social-circle">
                  <li><a href="/i" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="/i" className="icotwitter" title="twitter"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="/i" className="icogoogle" title="Linkedin"><i className="fa fa-google"></i></a></li>
                  <li><a href="/i" className="icopinterest" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="/i" className="icotwitter" title="twitter"><i className="fa fa-twitter"></i></a></li>
                </ul>

              </div>

              {/* <!-- Copyright --> */}
              <div className="copyright">© Copyright 2017:
                 <a href="/i" class="text-span"> Cooper.com</a>
                <p>All rights reserved</p>
              </div>
              {/* <!-- Copyright --> */}
            </div>
            {/* <!-- end of container --> */}

          </div>
          {/* <!-- end of footer-middle --> */}

        </footer>
      </div>


    );
  }
}

export default Footer;