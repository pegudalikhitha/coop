import React from 'react';
import './home.css';
import  Image from '../images/logo2_cooper.png';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

class Home extends React.Component {
  render() {
  return (
    	
  <div className="hom" >
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">
    <img src={Image} width="180" height="50" class="d-inline-block align-top" alt=""/>
   
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="nav ml-auto justify-content-end">
    <li className="nav-item">
        <a className="nav-link" href="#">HOME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">FEATURES</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">TESTIMONAL</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">PRICING</a>
      </li>
      
    </ul>
    <form className="form-inline ">
      <button className="btn1" type="submit">Try Demo</button>
    </form>
  </div>
</nav>

<div class="row">
    <div class="col-8" id="hometxt">
              
                <div className="best">best software for your office</div><br/>
                <div className="Try">Try Cooper Today!</div><br/>
                <p className="p1">Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy <br/>nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br/> volutpat.</p>
               
               <div class="row" id="homebtn">
                <button type="submit" className="btn2">Learn More</button>
                <button href="#" type="submit" className="btn2">Download</button></div>
                </div>
                </div>
          
      
      </div>
  );
  }
}

export default Home;
