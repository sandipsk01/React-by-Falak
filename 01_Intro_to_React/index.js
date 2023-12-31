// JAVASCRIPT

// const heading = document.createElement("h2");
//     heading.textContent = "Hello JavaScript!";
//     heading.className = "header";
//     document.getElementById("root").append(heading);
//     console.log("JavaScript Element: ", heading)

// React

// const reactHeading =React.createElement("h1",{className:"head", id:"reactHead", children:"Hello React!"});
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// JSX   -- There should be only one parent element   
// Use empty fragment or React.fragment for wrapping
// const jsxHeading =  <>
//                         <h1 className="head">Hello JSX!</h1>
//                         <p>This is JSX paragraph</p>
//                     </>
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);


// React Components- functional and class
// If we use arrow function without curly braces {} then we don't need to explicitely return 
const ArrowFunc=()=>(
    <>
        <p>This is an Arrow function</p>
    </>
)
function App(){
    return(
        <>
            <h1 className="head">Hello JSX!</h1>
            <p>This is JSX paragraph</p>
            <ArrowFunc />
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);