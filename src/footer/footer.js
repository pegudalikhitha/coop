
import React from 'react';
import './footer.css';

import '../App.css';
import  Image from '../images/logo2_cooper.png';


class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <div>
<footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className= "text-center">
    <img src={Image} width="180" height="50" class="d-inline-block align-top" alt=""/>
    <p className="Duis">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore</p></div>
    <div className="row">
       	
    		
            <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
             <li><a href="#" className="icopinterest" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
             <li><a href="#" className="icotwitter" title="twitter"><i className="fa fa-twitter"></i></a></li>
            </ul>				
		
    </div>

	{/* <!-- Copyright --> */}
  <div className="footer-copyright text-center py-3">© Copyright 2017:
    <a href=""> cooper.com</a>
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