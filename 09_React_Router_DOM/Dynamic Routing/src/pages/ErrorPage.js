import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ErrorPage(){
    const navigate=useNavigate();

    useEffect(()=>{
        setTimeout(()=>navigate("/"),3000);   //navigate(-1) to go one step back
    },[]);

    return(
        <>
        <main><h1>Error 404</h1></main>
        </>
    )
}

export default ErrorPage;