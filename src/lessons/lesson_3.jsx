import React, { Component } from 'react';
import { Posts } from '../Components/Posts';
//import Timer from "./lesson_2";

class PostList extends React.Component {
    state = {
        posts: [
            { id: 'abc1', name: 'JS Basics' },
            { id: 'abc2', name: 'JS Advanced' },
            { id: 'abc3', name: 'React JS' },
            { id: 'abc4', name: 'Vue JS' },
            { id: 'abc5', name: 'Angular JS' },
        ],
    };

    removePost = (id) => {
        this.setState({
            posts: this.state.posts.filter((post) => post.id !== id),
        });
    };


    render() {
        const { posts } = this.state;

        return (
            <div className="App">
                <Posts posts={posts} removePost={this.removePost} />
            </div>
        );
    }
}

export default PostList;