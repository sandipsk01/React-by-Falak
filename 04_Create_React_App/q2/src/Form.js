import {name, email} from "./HomePage"
// Complete the Form Component and export it
function handleLogin(event){
  event.preventDefault();
}

const Form = () => (
  <>
    <div>
      <form>{/* Create a h3, 2 inputs and 1 button here */}
        <h3>Login Page</h3>
        <input value={name}></input>
        <br /><br />
        <input type="email" value={email}></input>
        <br /><br />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  </>
);

export {Form};