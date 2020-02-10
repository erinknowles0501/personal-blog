import React from 'react';
import Shape from './Shape';
import Svg from './Svg';


class Post extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        let content = this.props.data.title.rendered.replace("&nbsp;", " ");
        let id = this.props.data.id;


        return (
            <section>

                <Shape />
                <Shape />
                <Shape />


            <h2>{content}</h2>
            <div dangerouslySetInnerHTML={ {__html: this.props.data.content.rendered} }></div>
            </section>
        )
    }
}

export default Post;