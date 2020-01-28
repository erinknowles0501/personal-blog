import React from 'react'

class Svg extends React.Component {
    constructor() {
        super();
        this.state ={};
    }
    
    componentDidMount() {
        const theSVG = document.getElementById(this.props.id);
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
        return (
            <svg id={this.props.id}>
            {this.props.children}
            </svg>
        );
    }
}


export default Svg