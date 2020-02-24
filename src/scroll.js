import React from 'react';
import './scroll.css';

class Scroll extends React.Component {
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
    
    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    render() {
        return ( 
                this.state.color === 'inactive' ?
                <div /> :
                <div className={this.state.color === 'inactive' ? "inactivescroll" : "activescroll"}  onClick={ () => { this.scrollToTop(); }}><i class="fa fa-angle-up"></i></div>
            
          );
       }    
     }   
     
     export default Scroll;