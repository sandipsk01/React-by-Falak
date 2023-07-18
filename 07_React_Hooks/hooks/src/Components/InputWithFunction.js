//useState
import { useState, useEffect } from "react";   
export default function Input(){
    const [name, setName]=useState("")  // const [state, setState] = useState(initialState);
    const [lastname, setLastName]=useState("")

    // useEffect(setup, dependencies?)   acts like componentDidMount and componentDidUpdate. if dependency = [] then useEffect=componentDidMount only

    useEffect(()=>{
        document.title=name+" "+lastname;
    },[lastname])

    useEffect(()=>{
        let timer=setInterval(()=>{
            console.log("window_width: ",window.innerWidth)
        }, 2000);

        return(clearInterval(timer));
    })

    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" value={name} onChange={(e)=>setName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input" value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello, {name + " " +lastname} </h2>
        
        </>
        )
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
