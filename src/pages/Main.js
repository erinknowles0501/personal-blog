import React from 'react';

import Post from '../components/Post';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <>{this.props.posts}</>
        )
    }
}




export default Main