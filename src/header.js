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

            // <nav id="stroke" className={this.state.color === 'inactive' ? "inactivestroke navbar navbar-default" : "activestroke navbar navbar-default"}>


            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>
            //     <div className="container" >
            //     {this.state.color === 'inactive' ? <img src={Image} width="150" height="40" className="logo_nav" alt="logo" /> : <img src={Image_active} width="150" height="40" className="logo_nav" alt="logo" />}
            //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //         <ul >

            //             <li className="nav-item"><button className={this.state.color === 'inactive' ? "inactivebtn1" : "activebtn1"} id="btn1" type="submit">Try Demo</button></li>
            //             <li className="nav-item"><a href="#Pricing" className={this.state.color === 'inactive' ? "inactive_t nav-link" : "active_t nav-link"} >Pricing</a></li>
            //             <li className="nav-item"> <a href="#Testimonials" className={this.state.color === 'inactive' ? "inactive_t nav-link" : "active_t nav-link"} >Testimonial</a></li>
            //             <li className="nav-item"> <a href="#About" className={this.state.color === 'inactive' ? "inactive_t nav-link" : "active_t nav-link"} >About</a></li>
            //             <li className="nav-item"> <a href="#Features" className={this.state.color === 'inactive' ? "inactive_t nav-link" : "active_t nav-link"} >Features</a></li>
            //             <li className="nav-item"><a href="#Home" className={this.state.color === 'inactive' ? "inactive_t nav-link" : "active_t nav-link"} >Home</a></li>
            //         </ul>
            //         </div>
            //     </div>
            // </nav>

            <nav className={this.state.color === 'inactive' ? "inactivestroke navbar navbar-expand-lg navbar-light" : "activestroke navbar navbar-expand-lg navbar-light"} >
                <div className="container">
                    <div>
                    <a className="navbar-brand" href="#i">
                        <img className="image-brand" src={this.state.color === "inactive" ? Image : Image_active} width="150" height="40" alt="logo" />
                    </a>
                    </div>
                    <div className="tog">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    

                    <div className={this.state.color === 'inactive' ? "inactive_t collapse navbar-collapse" : "active_t collapse navbar-collapse"} id="navbarSupportedContent">
                       
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#Home">
                                    <div className="decoration">Home</div></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#Features"><div className="decoration">Features</div></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#About"><div className="decoration">About</div></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#Testimonials"><div className="decoration">Testimonial</div></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#Pricing"><div className="decoration">Pricing</div></a>
                            </li>

                        </ul>

                    </div>
                    <div>
                    <button className={this.state.color === 'inactive' ? "inactivebtn1" : "activebtn1"} id="btn1" type="submit">Try Demo</button>
                    </div>
              </div>
              </div>
            </nav>

        );
    };
}
export default Header;