import React, { Component } from 'react';
import './pricing.css';
import '../App.css';
import Slickslide from '../slideshow/slideshow';
import Footer from '../footer/footer.js';
import Image10 from '../images/img06.jpg';


class Pricing extends Component {

	render() {
		return (
			<div className="main" id="Pricing">

				<div class="price">

					<p3 className="price_main_h">Select your <span className="text-bright" >plan as your choise</span>, <br/>no need to pay extra money.</p3>
					<div className="tab1">
						<div className="container">
							<div className="cols-holder">
								{/* <!-- Price col of the page --> */}
								<div className="price-col-first ">
									<strong className="title">free!</strong>
									<div className="offer-heading">
										<div className="secondrow"><span className="text-bold">$0</span><span className="text-dul">/mo</span><br /><span className="subtitle">30 Days Trial</span>
										</div>
									</div>
									<ul className="table-form">
										<li className="check"><i className="fa fa-check green-check"></i><span>1 User</span></li>
										<li className="check"><i className="fa fa-check green-check"></i><span>Admin Dashboard</span></li>
										<li className="un-check"><i className="fa fa-close"></i><span>Live Chat Service</span></li>
										<li className="un-check"><i className="fa fa-close"></i><span>Special Offers</span></li>
										<li className="check"><i className="fa fa-check green-check"></i><span>Free Support</span></li>
									</ul>
									<button className="btn_tab"><a href="/i" className="link-get" >Get Started now</a></button>
								</div>
								{/* <!-- Price col of the page end -->
		<!-- Price col of the page --> */}
								<div className="price-col-second  ">
									<strong className="title">Freelancer</strong>
									<div className="offer-heading">

										<div className="secondrow"><span className="text-bold">$3.99</span><span className="text-dul">/mo</span><br />
											<span className="subtitle">Best for Freelance Team</span></div>
									</div>
									<ul className="table-form">
										<li className="check"><i className="fa fa-check green-check"></i><span>1 User</span></li>
										<li className="check"><i className="fa fa-check green-check"></i><span>Admin Dashboard</span></li>
										<li className="check"><i className="fa fa-check green-check"></i><span>Live Chat Service</span></li>
										<li className="un-check"><i className="fa fa-close"></i><span>Special Offers</span></li>
										<li className="check"><i className="fa fa-check green-check"></i><span>Free Support</span></li>
									</ul>
									<button className="btn_tab"><a href="/i" >Get Started now</a></button>
								</div>
								{/* <!-- Price col of the page end -->
			<!-- Price col of the page --> */}
								<div className="price-col-third  ">
									<strong className="start">Startup</strong>
									<div className="offer-heading">

										<div className="secondrow" id="hover"><span className="text-bold" id="hover">$10</span><span id="hover" className="text-dul">/mo</span><br />
											<span className="subtitle_third" id="hover">Best for small startups</span>
										</div>
									</div>
									<ul className="table-form">
										<li className="white-check" id="hover"><i className="fa fa-check whitecheck"></i><span>20 Users</span></li>
										<li className="white-check" id="hover"><i className="fa fa-check whitecheck"></i><span>Admin Dashboard</span></li>
										<li className="white-check" id="hover"><i className="fa fa-check whitecheck"></i><span>Live Chat Service</span></li>
										<li className="white-check" id="hover"><i className="fa fa-check whitecheck"></i><span>Special Offers</span></li>
										<li className="white-check" id="hover"><i className="fa fa-check whitecheck"></i><span>Free Support</span></li>
									</ul>
									<button className="btn_tabh"><a href="/i" >Get Started now</a></button>

								</div>
								{/* <!-- Price col of the page end -->
				<!-- Price col of the page --> */}
								<div className="price-col-fourth ">
									<strong className="title">Company</strong>
									<div className="offer-heading">


										<div className="secondrow"><span className="text-bold">$15.99</span><span className="text-dul">/mo</span><br />
											<span className="subtitle">Best for Big Team</span>
										</div>
									</div>
									<ul className="table-form">
										<li className="check"><i className="fa fa-check green-check"></i><span>1 Users</span></li>
										<li className="check"><i className="fa fa-check green-check"></i><span>Admin Dashboard</span></li>
										<li className="un-check"><i className="fa fa-close"></i><span>Live Chat Service</span></li>
										<li className="un-check"><i className="fa fa-close"></i><span>Special Offers</span></li>
										<li className="check"><i className="fa fa-check green-check"></i><span>Free Support</span></li>
									</ul>
									<button className="btn_tab"><a href="/i" >Get Started now</a></button>
								</div>
								{/* <!-- Price col of the page end --> */}
							</div>
						</div>

					</div>


					<div className="">
						<div className="banner" id="trialtodaytxt" >
							<div className="col-xs-12 col-sm-6">
								<div className="alignleft">
									<img src={Image10} alt=" description" className="img10-responsive" />
								</div>
							</div>
							<div className="col-xs-12 col-sm-6">
								<div className="align">
									<div className="heading-wrap">
										<p className="primary_block_txt">Try our free trial today. If you don’t like, you can cancel it anytime!</p>
									</div>
									<p className="second_block_txt">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
									<div className="info"><a href="/i" className="btn-t">Try our demo</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="thirdtxt">
						<p4 className="customtxt">Some of our <span className="text-bright" >trusted customers</span>, <br />who are statisfied!</p4>
					</div>


					< Slickslide />
					<Footer />
				</div>

			</div>
		);
	}
}

export default Pricing;