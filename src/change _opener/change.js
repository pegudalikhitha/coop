import React from 'react';
import './change.css';

class Change extends React.Component {
    state = {
        flag: false
    }
    flag = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        return (
            <div>
                {this.state.flag ?
                    <div className="style-changer" >Hi</div>
                    : ''
                }

                <div className={this.state.flag ? "change active" : "change "} onClick={() => { this.flag() }}><i class="fa fa-cog"></i></div>
            </div>


        );
    }
}

export default Change;