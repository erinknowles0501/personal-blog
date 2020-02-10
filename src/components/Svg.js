import React from 'react'

class Svg extends React.Component {
    constructor() {
        super();
        this.state ={};
    }
    
//    componentDidMount() {
//        const theSVG = document.getElementById('svg' + this.props.id);
//        const theGroup = document.getElementById('group' + this.props.id);
//        if (theSVG) {
//            console.log("There is svg!");
//            let totalHeight = theGroup.getBBox().height;
//            let totalWidth = theGroup.getBBox().width;
//            theSVG.setAttribute("height", totalHeight);
//            theSVG.setAttribute("width", totalWidth);
//        }
//    }
    
    render() {
        return (
            <svg id={'svg' + this.props.id}>
            {this.props.children}
            </svg>
        );
    }
}


export default Svg