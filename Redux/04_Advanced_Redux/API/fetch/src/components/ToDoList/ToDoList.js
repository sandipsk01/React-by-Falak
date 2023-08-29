import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import styles from "./ToDoList.module.css";
import {useEffect} from "react";
import axios from "axios";

function ToDoList() {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  useEffect(() => {
      // fetch("http://localhost:4100/api/todos")   //by default fetch function sends get request to api
        // .then(res=>res.json())   //used 'then' when returns promise
        //   .then(parsedJson=>{
        //     console.log(parsedJson);
        //   })

        //The Axios library has a get method to make HTTP GET requests to an API. It returns a promise that needs to be awaited, and the response object has a data property containing parsed JSON.
      axios.get("http://localhost:4100/api/todos")
        .then(res=>   //used 'then' when returns promise
          console.log(res.data))
  }, []);


  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={todo.id}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            // console.log("[LOG]: Todo - TOGGLE Action dispatched");
            disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;