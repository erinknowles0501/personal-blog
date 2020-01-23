import React from 'react';

import Post from './Post.js';

import './index.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    
    }
    
    componentDidMount() {
        let url = "https://public-api.wordpress.com/wp/v2/sites/makesomenotions.design.blog/posts";
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({data: data});
        });
    }

    
    render() {
        let posts = [];

        
        // have to make this if - otherwise it tries to render nothing the first time around!
        if (this.state.data) {
            this.state.data.map(function(post) {
                posts.push(
                    <Post data={post} />
                );
            });
        }
        
        return (
            <div className="App">
                <header>
                    <h1>Some notions</h1>
                    <p>The personal blog of Erin Knowles.<br />
                    Looking for <a href="erinknowles.com">her portfolio?</a></p>
                </header>
                
                <main>{posts}</main>
            </div>
        );
    }
}

export default App;
