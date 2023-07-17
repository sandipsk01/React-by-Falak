import { Component } from "react";
import ComponentA from "./ComponentA";
import TimerOne from "./Timer/TimerOne";
import ErrorBoundary from "./ErrorBoundary";
class App extends Component {
  constructor(){
    super();
    this.state={
      mount: false,
      timerOn: false
    }
  }

  handleMount=()=>{
    this.setState((prevState)=>({mount: !prevState.mount}))
  }

  handleTimerOn=()=>{
    this.setState((prevState)=>({timerOn: !prevState.timerOn}))
  }
  render(){
    return (
      <>
      {/* <button onClick={this.handleMount}>{this.state.mount?"Un-Mount":"Mount"}</button> */}
      <ErrorBoundary>
      <ComponentA />
      </ErrorBoundary>
      {/* {this.state.mount?<TimerOne />:null} */}
      <TimerOne timerOn={this.state.timerOn}/>
      <button onClick={this.handleTimerOn}>{this.state.timerOn?"STOP":"START"}</button>
      </>
    );
  }
}

export default App;
