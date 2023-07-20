import { useState, useRef, useEffect, useReducer } from "react";

//Blogging App using Hooks

function blogsReducer(state, action){
    switch(action.type){
        case "ADD":
            return [action.blog, ...state];
        case "REMOVE":
            return state.filter((blog,index)=>index!==action.index);
        default:
            return [];
    }
}
export default function Blog(){
    
    // const [title, setTitle]= useState("");
    // const [content, setContent]= useState("");

    const [formData, setFormData]=useState({title:"",content:""})

    // const [blogs, setBlogs]=useState([]);

    // const [state, dispatch] = useReducer(reducer, initialArg, init?)
    // reducer: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
    // optional init: The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
    //The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render. You need to pass the action as the only argument to the dispatch function.
    const [blogs, dispatch]=useReducer(blogsReducer,[]);

    const titleRef=useRef(null);
    // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
    // const ref = useRef(initialValue)
    //initialValue: The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.
    //Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.

    useEffect(()=>{
        titleRef.current.focus()
    },[]);

    useEffect(()=>{
        if(blogs.length && blogs[0].title){
            document.title=blogs[0].title;
        }else{
            document.title="No Blogs!!"
        }
    },[blogs])
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();

        // setBlogs([{title,content},...blogs]);       //rest operator to keep whatever their already present in array
        // setTitle("");
        // setContent("");
        // setBlogs([{title:formData.title,content:formData.content},...blogs]);
        dispatch({type:"ADD",blog:{title:formData.title,content:formData.content}})
        setFormData({title:"", content:""});
        titleRef.current.focus();
        console.log({blogs})
    }

    function removeBlog(i){
        // setBlogs(blogs.filter((blog, index)=>i!==index))
        dispatch({type:"REMOVE",index:i})
    }
    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                value={formData.title}
                                ref={titleRef}
                                onChange={(e)=>setFormData({title:e.target.value, content:formData.content})}
                                // partial setState doesn't work in hook so mention both the keys even though they are no setting
                                />
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value={formData.content}
                                required
                                onChange={(e)=>setFormData({title:formData.title,content:e.target.value})}/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog,i)=>(
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <div className="blog-btn">
                    <button className="btn remove" onClick={()=>removeBlog(i)}>
                        Delete
                    </button>
                </div>
            </div>
        ))}
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
