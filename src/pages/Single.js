import React from 'react';

class Single extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <>
            <h1>{this.props.match.params.id}</h1>
            Hello????
            </>
        )
    }
}




export default Single