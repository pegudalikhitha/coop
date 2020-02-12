import React from 'react';
import Image from './images/logo2_cooper.png';
import Image_active from './images/logo.png';
import './header.css';

class Header extends React.Component {
    state = {
        color: 'inactive'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 150) {
            this.setState({ color: 'active' })
        } else {
            this.setState({ color: 'inactive' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (            
            <div className="head">
                 <div className={this.state.color === 'inactive' ? "inactiveheaderDiv" : "activeheaderDiv"}></div>
                <nav  id="stroke" className={this.state.color === 'inactive' ? "inactivestroke" : "activestroke"}>

                    <ul>
                    {this.state.color === 'inactive' ?  <img src={Image} width="150" height="40" class="logo_nav" alt="logo" /> :  <img src={Image_active} width="150" height="40" class="logo_nav" alt="logo" />}
                       
                        <li><button  className={this.state.color === 'inactive' ? "inactivebtn1" : "activebtn1"} id="btn1" type="submit">Try Demo</button></li>
                        <li><a href="#Pricing" className={this.state.color === 'inactive' ? "inactive_nav-link" : "active_nav-link"} >Pricing</a></li>
                        <li> <a href="#Testimonials" className={this.state.color === 'inactive' ? "inactive_nav-link" : "active_nav-link"} >Testimonial</a></li>
                        <li> <a href="#About" className={this.state.color === 'inactive' ? "inactive_nav-link" : "active_nav-link"} >About</a></li>
                        <li> <a href="#Features"className={this.state.color === 'inactive' ? "inactive_nav-link" : "active_nav-link"} >Features</a></li>                        
                        <li><a href="#Home" className={this.state.color === 'inactive' ? "inactive_nav-link" : "active_nav-link"} >Home</a></li>
                    </ul>

               
                </nav>
            </div>


        );
    };
}
export default Header;