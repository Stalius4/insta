import insta from "./insta.png"
import "./login.css"
import { createUser, loginUser } from "../../utils/utils.js";
import { useState } from "react";
const Login = ({setter, setJwt, jwt}) => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = (e) => {
        e.preventDefault();
        createUser(username, email, password, setter);
      };
const submitLogin = (e) => {
    e.preventDefault();
    loginUser(username, email, password, setJwt)
console.log("jwt in login",jwt)
}
      
    return(
<div className="flex-container">

    {/* <img  className="img" src={insta} alt="" width={160} />
    <form className="flex-form"  onSubmit={submitHandler} >
        <input 
        onChange={(e) => setUsername(e.target.value)}
        className="form" 
        type="text" 
        placeholder="Username "
        />        <input 
        onChange={(e) => setEmail(e.target.value)}
        className="form" 
        type="text" 
        placeholder="Email"
        />
        <input 
        onChange={(e) => setPassword(e.target.value)}
         className="form"
          type="password" 
          placeholder="Password" 
 />
        <button  type="submit"  >Register</button>
    </form> */}
    <img  className="img" src={insta} alt="" width={160} />
    <form className="flex-form"  onSubmit={submitLogin} >
        <input 
        onChange={(e) => setUsername(e.target.value)}
        className="form" 
        type="text" 
        placeholder="Username "
        />        <input 
        onChange={(e) => setEmail(e.target.value)}
        className="form" 
        type="text" 
        placeholder="Email"
        />
        <input 
        onChange={(e) => setPassword(e.target.value)}
         className="form"
          type="password" 
          placeholder="Password" 
 />
        <button  type="submit"  >Login</button>
    </form>
</div>

    )
    
}

export default Login