import React from 'react';
import './style.css';
// import Count from './lessons/lesson_1';

export default class App extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };

    handleStart = () => { this.setState({isCounting: true});
            this.timerId = setInterval(()=>{
            this.setState({ count: this.state.count + 1 })
            },3000)
    };
    handleStop = () => { this.setState({isCounting: false}); clearInterval(this.timerId)};
    handleReset = () => { this.setState({ count: 0 }); localStorage.setItem('myCount', 0) }

    componentDidMount() { this.setState({count: JSON.parse(localStorage.getItem('myCount'))})
                        //localStorage.setItem('myCount', this.state.count)
                        }
    componentDidUpdate() {localStorage.setItem('myCount', this.state.count)}

    componentWillUnmount() {clearInterval(this.timerId)}

    render() {
        return (
            <div className="App">
                <h1 className="center">React Timer</h1>
                <h3 className="s1 center">{this.state.count}</h3>
                <div className="center-2">
                    {!this.state.isCounting ? (
                        <button className="btn center" onClick={this.handleStart}>Start</button>
                    ) : (
                        <button className="btn center" onClick={this.handleStop}>Stop</button>
                    )}
                    <button className="btn center" onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

