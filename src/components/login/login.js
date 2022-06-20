import insta from "./insta.png"
import "./login.css"
import { useEffect, useState } from "react";
const Login = () => {

    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin]=  useState(
        {
        name:"",
        pass:""
        })
        const handleChange = e => {
            const { name, value } = e.target;
            setLogin(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    return(
<div className="flex-container">
    <img src={insta} alt="" width={160} />
    <form className="flex-form"  action="" >
        <input 
        onChange={handleChange} 
        className="form" 
        type="text" 
        placeholder="Phone number, username or email"
        value={login.name}
        name="name"/>
        <input onChange={handleChange} 
         className="form"
          type="password" 
          placeholder="Password" 
        value={login.pass}
        name="pass" />
        <button  type="button" >Login</button>
    </form>
</div>

    )
    
}

export default Login