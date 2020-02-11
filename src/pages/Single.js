import React from 'react';

class Single extends React.Component {
    render() {
        let id = this.props.match.params.id;

        return (
            <section>
                <h1>{this.props.location.state.title}</h1>
                <div className="content" dangerouslySetInnerHTML={ {__html: this.props.location.state.content} }></div>
            </section>
        )
    }
}

export default Single