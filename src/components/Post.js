import React from 'react'
import {Link} from 'react-router-dom'

import Shape from './Shape'
import Svg from './Svg'


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


            <h2><Link to={'/post/'+this.props.data.id}>{content}</Link></h2>
            <div dangerouslySetInnerHTML={ {__html: this.props.data.content.rendered} }></div>
            </section>
        )
    }
}

export default Post;