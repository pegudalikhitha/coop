import React from 'react';

 class Counter extends React.Component {
   state = {
     counter: 0
   }
  
   componentDidMount() {
    this.setState({
      counter: this.state.counter + 1
   })
  }
  componentDidMount() {
    this.setState({  counter: this.state.counter + 1 })
  }

   componentDidUpdate() {
     if(window.scrollY > 150) {
      if (this.state.counter < 100) {
        setTimeout(() => {
          this.setState({
            counter: this.state.counter + 1
          })
        }, 100);
      }
     }
    }


  render() {
    return (
      <div>
        {this.state.counter}
      </div>
    )
  }
 }

 export default Counter;