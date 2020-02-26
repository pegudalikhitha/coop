import React, { Component } from 'react';

class counter_Theme extends Component {
    state = {
        counter_Theme: 0
      }
     
      componentDidMount() {
       this.setState({
        counter_Theme: this.state.counter_Theme + 1
      })
     }
     componentDidMount() {
       this.setState({  counter_Theme: this.state.counter_Theme + 1 })
     }
   
      componentDidUpdate() {
        if(window.scrollY > 150) {
         if (this.state.counter_Theme< 12) {
           setTimeout(() => {
             this.setState({
                counter_Theme: this.state.counter_Theme + 1
             })
           }, 100);
         }
        }
       }
   
   
     render() {
       return (
         <div>
           {this.state.counter_Theme}
         </div>
       )
     }
    }
export default counter_Theme;