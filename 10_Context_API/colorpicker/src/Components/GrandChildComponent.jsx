// importing the useContext hooks and color context
// import { useContext } from "react";
import { colorContext } from "../context";

// function GrandChildComponent() {
//   const value =useContext(colorContext);
//   console.log(value);
//   return (
//   <p style={{ color: value.color }}>Color Code: { value.color}</p>
// )
// };


// Using Consumer  <Context.Consumer> function which returns JSX </Context.Consumer>

function GrandChildComponent() {
  
  return (
    <colorContext.Consumer>
      {
        (value)=>
        <p style={{ color: value.color }}>Color Code: { value.color}</p>
      }
    </colorContext.Consumer>
)
};

export default GrandChildComponent;
