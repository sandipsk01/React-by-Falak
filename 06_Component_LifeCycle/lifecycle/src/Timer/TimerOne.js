import { Component } from "react";

class TimerOne extends Component{
    constructor(){
        super();

        this.state={
            time:0
        }

        this.timer=null;
        console.log("TimerOne Constructor")

    }

    static getDerivedStateFromProps(){
        console.log("TimeOne getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("TimerOne shouldComponentUpdate")
        console.log(this.state.time)
        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5===0;
    }

    render(){
        console.log("TimerOne render")
        return(
            <>
            <h1>Time Spent: {new Date(this.state.time*1000).toISOString().slice(11,19)}</h1>
            
            </>
        );
    }

    componentDidMount(){
        console.log("TimerOne componentDidMount")
        console.log("-----------------------------")

        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("TimerOne getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("TimerOne componentDidUpdate")
        console.log("-----------------------------")
        // console.log("prevProps: ",prevProps)
        // console.log("prevState: ",prevState)
        // console.log("snapShot: ",snapShot)
        // if(this.state.time===10){
        //     clearInterval(this.timer)
        // }

        if(prevProps.timerOn!==this.props.timerOn){
            if(this.props.timerOn){
                this.timer= setInterval(()=>{
                    this.setState((prevState)=>({time:prevState.time+1}))
                }, 1000);
            }else{
                clearInterval(this.timer)
            }
        }
        
    }

    componentWillUnmount(){
        console.log("TimerOne componentWillUnmount")
        
    }
}

export default TimerOne;