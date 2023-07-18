import React from "react";

export default class Input extends React.Component{

    constructor(){
        super();
        this.state={
            name:"",
            lastname:""
        }
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleLastName=(e)=>{
        this.setState({
            lastname:e.target.value
        })
    }

    componentDidMount(){
        document.title=this.state.name+" "+this.state.lastname

        this.timer=setInterval(()=>{
            console.log("window_width: ",window.innerWidth)
        },2000)
    }

    componentDidUpdate(){
        document.title=this.state.name+" "+this.state.lastname
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input className="input" value={this.state.name} onChange={this.handleName}/>
                </Row >
                <Row label="Last Name">
                        <input className="input" value={this.state.lastname} onChange={this.handleLastName}/>
                </Row >
            </div>
    
            <h2>Hello, {this.state.name+" "+this.state.lastname} </h2>
            
            </>
            )

    }
   
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
