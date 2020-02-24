import React from 'react'
// import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
// import { ReactComponent as Playbtn } from '../images/play.svg';
import 'react-modal-video/scss/modal-video.scss';
import './youtube.css'
 
class Youtube extends React.Component {
 
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    return (
      <div >
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
      {/* <button onClick={this.openModal} >open</button> */}
        {/* <Playbtn  height='30px' position='relative'/> */}
        <i className="fa fa-play-circle icon-props" onClick={this.openModal} ></i>
      </div>
    )
  }
}
 
export default Youtube;
// ReactDOM.render(
//   <Youtube/>,
//     document.getElementById('root')
// );