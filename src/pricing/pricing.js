import React, {Component} from 'react';
import './pricing.css';
import '../App.css';
import Image10 from '../images/img06.jpg';
import Image11 from '../images/logo-1.jpg';
import Image12 from '../images/logo-2.jpg';
import Image13 from '../images/logo-3.jpg';
import Image14 from '../images/logo-4.jpg';
import Image15 from '../images/logo-5.jpg';
import Image16 from '../images/logo-6.jpg';

class Pricing extends Component{
  constructor(props){
    super(props);
  }
    render(){
        return(
           <div> <div class="price">
                <div>
<h2>Select your <span className="text-bright" >plan as your choise</span>, <br/>no need to pay extra money.</h2>

<table className="table table-striped" >
  <thead >
    <tr>
      <th scope="col">FREE!</th>
      <th scope="col">FREELANCER</th>
      <th scope="col">STARTUP</th>
      <th scope="col">COMPANY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><strong>$0</strong>/mo<br/>30 Days Trial</td>
      <td ><strong>$3.99</strong>/mo<br/>Best for Freelance Team</td>
      <td ><strong>$10</strong>/mo<br/>Best for small startups</td>
      <td ><strong>$15.99</strong>/mo<br/>Best for Big Team</td>
    </tr>
    <tr>
      <td scope="row">1 User</td>
      <td>1 User</td>
      <td>20 User</td>
      <td>1 User</td>
    </tr>
    <tr>
      <td scope="row">Admin Dashboard</td>
      <td>Admin Dashboard</td>
      <td>Admin Dashboard</td>
      <td>Admin Dashboard</td>
    </tr>
    <tr>
      <td scope="row">Live Chat Service</td>
      <td>Live Chat Service</td>
      <td>Live Chat Service</td>
      <td>Live Chat Service</td>
    </tr>
    <tr>
      <td scope="row">Special Offers</td>
      <td>Special Offers</td>
      <td>Special Offers</td>
      <td>Special Offers</td>
    </tr>
    <tr>
      <td scope="row">Free Support</td>
      <td>Free Support</td>
      <td>Free Support</td>
      <td>Free Support</td>
    </tr>
    <tr>
      <td scope="row"> <a href="#" className="btn btn-info">GET STARTED NOW</a></td>
      <td><a href="#" className="btn btn-info">GET STARTED NOW</a></td>
      <td><a href="#" className="btn btn-info">GET STARTED NOW</a></td>
      <td><a href="#" className="btn btn-info">GET STARTED NOW</a></td>
    </tr>
  </tbody>
</table>

<div className="row"  id="trialtodaytxt" >
					<div className="alignleft">
						<img src={Image10}alt="image description" id="img6"className="img-responsive" />
					</div>
					<div className="col-xs-12 col-sm-6 descr">
						<div className="align">
							<div className="heading-wrap">
								<p className="primartxt">Try our free trial today. If you don’t like, you can cancel it anytime!</p>
							</div>
							<p className="secondtxt">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
							<div className="info"><a href="#" className="btn btn-info">Try our demo</a></div>
						</div>
					</div>
				</div>

				<div className="thirdtxt">
					<p>Some of our <span className="text-bright" >trusted customers</span>, <br/>who are statisfied!</p>
          </div>
        </div>

        </div> 
        
        
        
        
							</div>
        );
    }
}

export default Pricing;