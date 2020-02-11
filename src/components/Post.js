import React from 'react'
import {Link} from 'react-router-dom'

class Post extends React.Component {
    render() {
        let title = this.props.data.title.rendered.replace("&nbsp;", " ");
        let content = this.props.data.content.rendered;
        let id = this.props.data.id;


        return (
            <section>

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