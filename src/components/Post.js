import React from 'react';
import Shape from './Shape';


class Post extends React.Component {
    constructor() {
        super();
    }
    
    resizeSVG() {
        const theSVG = document.getElementById(this.props.data.id);
        if (theSVG) {
            console.log("There is svg!");
//            const typeSVGel = document.getElementById(this.state.id);
//            totalHeight = typeSVGel.getBBox().height;
//            totalWidth = typeSVGel.getBBox().width;
//   //         document.getElementById(this.svgId).setAttribute("height", totalHeight);
//    //        document.getElementById(this.svgId).setAttribute("width", totalWidth);
        }
    }
    
    render() {
        let content = this.props.data.title.rendered.replace("&nbsp;", " ");
        let id = this.props.data.id;

    //    this.resizeSVG();

        return (
            <section>

            <svg id={id}>
            <Shape />
            <Shape />
            <Shape />
            </svg>
            
            {this.resizeSVG()}

            <h2>{content}</h2>
            <div dangerouslySetInnerHTML={ {__html: this.props.data.content.rendered} }></div>
            </section>
        )
    }
}

export default Post;