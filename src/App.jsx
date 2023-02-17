import React, { Component } from 'react';
import PostList  from './lessons/lesson_3';
import  Timer from './lessons/lesson_2';

class App extends Component {
    render() {
        const { posts } = this.state;
        return (
          <Timer />
        );
    }
}
export default App;
