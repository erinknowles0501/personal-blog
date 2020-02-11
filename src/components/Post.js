import React from 'react'
import {Link} from 'react-router-dom'

import Shape from './Shape'
import Svg from './Svg'


class Post extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        let title = this.props.data.title.rendered.replace("&nbsp;", " ");
        let content = this.props.data.content.rendered;
        let id = this.props.data.id;


        return (
            <section>

                {/* <Shape />
                <Shape />
                <Shape /> */}


            <h2>
                <Link to={{
                    pathname: '/post/'+id,
                    state: {
                        title: title,
                        content: content
                    }
                }}>{title}</Link>
                </h2>
            <div className="content" dangerouslySetInnerHTML={ {__html: content} }></div>
            </section>
        )
    }
}

export default Post;