import React, {Component} from 'react';
import '../App.css';
import './features.css';
import Image1 from '../images/id-card.svg';
import Image2 from '../images/clock.svg';
import Image3 from '../images/notes.svg';
import Image4 from '../images/calculator.svg';
import Image5 from '../images/cleaning.png';
import Image6 from '../images/calendar.svg';

class Features extends Component{
	constructor(props){
		super(props);
	}
    render(){
        return(

			<div>

    <section className="features-area container" data-scroll-index="1" >

				<div className="header" >					
						<h2 style={{textalign: 'center',padding: '30px'}}>Best software to manage <br/>your office <span className="text-bright" style={{color: '#009bde'}}>work and workers!</span></h2>				
				</div>

				<div className="flex1">
				{/* <!-- Features of the page --> */}
				
						<div className="icon">
							<img src={Image1} width="54" height="52" alt="icon id-card" className="img-responsive"/>
						</div>
						<figcaption>
						<h3><a href="#">Special Login System</a></h3>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p></figcaption>
					
						<div className="icon">
							<img src={Image2} width="56" height="50" alt="icon clock" className="img-responsive"/>
						</div>
						<figcaption>
						<h3><a href="#">Time Tracking</a></h3>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p></figcaption>
					
						<div className="icon">
							<img src={Image3} width="51" height="45" alt="icon notes" className="img-responsive"/>
						</div>
						<figcaption>
						<h3><a href="#">Make notes easily</a></h3>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p></figcaption>
					</div>
					
						<div className="flex2">
						<div className="icon">
							<img src={Image4} width="52" height="60" alt="icon calculator" className="img-responsive"/>
						</div>
						<figcaption>
						<h3><a href="#">Calculate daily cost</a></h3>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p></figcaption>
					
						<div className="icon">
							<img src={Image5} width="37" height="51" alt="icon cleaning" className="img-responsive"/>
						</div>
						<figcaption>
						<h3><a href="#">One click cleaning</a></h3>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p>
					</figcaption>
					
						<div className="icon">
							<img src={Image6} width="49" height="51" alt="icon calandar" className="img-responsive"/>
						</div>
						<figcaption>
						<h3><a href="#">Daily report</a></h3>
						<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.</p></figcaption>
					
			   </div>
			
			</section>
			</div>
  );
 }
}
export default Features ;