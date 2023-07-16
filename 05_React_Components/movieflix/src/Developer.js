import { Component } from "react";

// props can not be modified in child components

// class Developer extends Component{
//     render(){
//         const {name}=this.props;
//         return(
//             <>
//             <h3>Developed by {name}</h3>
//             </>
//         )
//     }
// }

function Developer(props){
    const {name}=props;
    return(
        <>
        <h3>Developed by {name}</h3>
        </>
    )
}

export default Developer;