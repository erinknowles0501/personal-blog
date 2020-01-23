import React from 'react';

class Shape extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "type": this.makeShape().type,
            "size": this.makeShape().size,
            "color": this.makeShape().color,
            "opacity": this.makeShape().opacity,
            "gradient": false,
            "rotation": this.makeShape().rotation,
        };
    }
    
        
    makeShape() {
        let colors = ["cyan", "white", "magenta", "pink"];
        let shapes = ["circle", "square", "polygon"];
        
        let size = (Math.random()+0.3) * 60;
        let opacity = Math.random() + 0.2;
        let color = colors[Math.floor(Math.random() * colors.length)];
        let type = shapes[Math.floor(Math.random()*shapes.length)];
        let rotation = "rotate(" + Math.random()*360 + "," + (size) + "," + (size) + ")";
        
        return {"type": type, "color": color, "size": size, "opacity": opacity, "rotation": rotation};
    }
    
    render() {
        
        console.log(this.state.rotation); 
        let typeSVG = '';
        switch (this.state.type) {
            case 'circle':
                typeSVG =
                    <circle r={this.state.size} cy={this.state.size} cx={this.state.size} fill={this.state.color} opacity={this.state.opacity} alignmentBaseline="central"></circle>;
                break;
            case 'square':
                typeSVG = 
                    <rect width={this.state.size} height={this.state.size} fill={this.state.color} opacity={this.state.opacity} transform={this.state.rotation}></rect>;
                break;
            case 'polygon':
                let points = 
                    `${this.state.size*2}, ${this.state.size*0.1} ${this.state.size*0.2},${this.state.size*1.6} ${this.state.size*1.8},${this.state.size*1.5}`;
                typeSVG = 
                    <polygon points={points} fill={this.state.color} opacity={this.state.opacity} transform={this.state.rotation}></polygon>
                break;
            default:
                typeSVG = 
                    <circle r={this.state.size} cy={this.state.size} cx={this.state.size} fill={this.state.color} opacity={this.state.opacity} alignmentBaseline="central"></circle>;
        }
        
        
        return (
            <svg height={this.state.size*2} width={this.state.size*2}>
            
            {typeSVG}
            
                
            
            
            </svg>
        )
    }
}


export default Shape