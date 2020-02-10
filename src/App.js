import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';


import Header from './components/Header.js';
import Main from './pages/Main.js';
import Post from './components/Post.js';
import Single from './pages/Single.js';

import './index.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    
    }
    
    componentDidMount() {
        let url = "https://public-api.wordpress.com/wp/v2/sites/makesomenotions.design.blog/posts";
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({data: data});
            this.createPosts();
        });
        
    }
    
    createPosts() {
        let posts = [];
        
        this.state.data.map(function(post, i) {
            posts.push(
                <Post data={post} key={i} />
            );
        });
        this.setState({posts: posts});
    }
        
    


    
    render() {
        
        if (this.state.data) {

            return (
                <>
                <Header />

                <main>
                <Switch>
                    <Route exact path='/' render={(props) => <Main {...props} posts={this.state.posts} />} />
                    <Route path='/post/:id' component={Single} />
                </Switch>
                </main>

                </>
            );
        } else {
            return "Loading...";
        }
    }
}

export default App;
