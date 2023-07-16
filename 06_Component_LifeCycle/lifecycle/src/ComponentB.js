import { Component } from "react";

class ComponentB extends Component{
    constructor(){
        super();
        this.state={
            name:"ComponentB"
        }
        console.log("ComponentB Constructor");
        
    };

    static getDerivedStateFromProps(props,state){
        console.log("ComponentB getDerivedStateFromProps");
        
        return null;
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount");
        
    }
    render(){
        console.log("ComponetA Render");
        
        return(
            <>
            <h2>{this.state.name}</h2>
            </>
        )
    }
}

export default ComponentB;