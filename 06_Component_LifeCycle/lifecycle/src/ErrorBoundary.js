// Error Boundary has static getDerivedStateFromError(error), componentDidCatch(error, info)
import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();

        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return {hasError:true};
    }

    componentDidCatch(error, info){
        console.log("Error: ", error)
        console.log("Error Info: ", info)    
    }

    render(){
        if(this.state.hasError){
            return(<h1>Something Went Wrong</h1>)
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
