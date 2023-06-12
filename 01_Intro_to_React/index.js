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
const jsxHeading =  <>
                        <h1 className="head">Hello JSX!</h1>
                        <p>This is JSX paragraph</p>
                    </>

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);