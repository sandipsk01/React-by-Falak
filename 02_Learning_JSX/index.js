function sum(a,b){
    a+b;
}

const header=<h2>JSX Expression</h2>;
function App(){
    var topic="JSX";
    var number=10;
    let demo=null;
    let und;
    let bool=true;
    
    return(
        <>
        <h1>Let's Learn {topic}!</h1>   {/*Any Valid expression can be embed to to jsx. It should resolve value */}
        {header}
        <p>No of sections is {number}. </p>
        <p>Null Value: {demo}</p>
        <p>Undefined:{und}</p>
        <p>Boolean:{' '+bool}</p>  {/*Null, undefined, booleans can not be embed to jsx diretly.*/}
        <p>Sum of 2 and 3 is = {sum(2,3)}</p>   {/* Function should return something then only it will get embeded*/}
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)