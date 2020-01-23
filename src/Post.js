import React from 'react';
import Shape from './Shape';


function Post(props) {
    let content = props.data.title.rendered.replace("&nbsp;", " ");
    
    return (
        <section>
        
        <Shape />
        <Shape />
        <Shape />
        
            <h2>{content}</h2>
        <div dangerouslySetInnerHTML={ {__html: props.data.content.rendered} }></div>
        </section>
    )
}

export default Post;