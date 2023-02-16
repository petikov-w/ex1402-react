import React, { Component } from 'react';

class Count extends Component {
    state = {
        count: 0,
    };

    handleClickPlus = () => {
        this.setState({ count: this.state.count + 1 });
    };
    handleClickMinus = () => {
        if (this.state.count > 0)  this.setState({ count: this.state.count - 1 });
    };
    render() {
        return (
            <div className="App">
                <button className="btn" onClick={this.handleClickMinus}>-</button>
                <span className="s1">
            {this.state.count}
          </span>
                <button className="btn" onClick={this.handleClickPlus}>+</button>
            </div>
        );
    }
}

export default Count;