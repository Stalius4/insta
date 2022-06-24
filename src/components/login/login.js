import insta from "./insta.png";
import "./login.css";
import { createUser, loginUser } from "../../utils/utils.js";
import { useState } from "react";

export const Login = ({ setter, setJwt, jwt, setDuplicateUser, user ,duplicateUser, setDuplicateEmail, duplicateEmail}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const [loginError, setLoginError] = useState(false);
  const [signUp, setSignUp] = useState(true);
    const[emailUsernameCorrect, setEmailUsernameCorrect]= useState(false)

  const submitHandler = (e) => {
    
    e.preventDefault();
    setDuplicateUser(true)
    //true - dont show
    setDuplicateEmail(true)
       //true - dont show
    
       //true - dont show
    // console.log(emailUsernameCorrect, "sds")
    console.log(user)
    if(user=== undefined){  
        setEmailUsernameCorrect(false)
        //hide
    }else if (user){
        setEmailUsernameCorrect(true)
        //show
    }

    createUser(username, email, password, setter, setDuplicateUser, setDuplicateEmail);
    
    
  };


  const submitLogin = (e) => {
    e.preventDefault();
    loginUser(username, email, password, setJwt);
    console.log("jwt in login", jwt);
    if (jwt === false ) {
      setLoginError(true);
    } else {setLoginError(false)}
  };

  return (
   <>
        {signUp ?    <div>  <div className="flex-container">
      <img className="img" src={insta} alt="" />
      <form className="flex-form" onSubmit={submitLogin}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="form" required
          type="text"
          
        /><span className="floating-label">Username</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="form"
          type="password"
          placeholder="Password"
        />
        <button className="button" type="submit">Login</button>
      </form>
      {loginError ? (<div className="wrong-pass"> Sorry, your password was incorrect. Please double-check your password. </div>) : ("")}
    </div>
    <div className="sign-up">
  <p className="no-acc">Don't have an account? </p>
  <span onClick={() => setSignUp(!signUp)} className="sign-up-text">         
    Sign up
  </span>
  </div>
  </div>
   :      <div>  <div className="flex-container">
          <img className="img" src={insta} alt=""  />
          <p>Sign up to see photos and videos from your friends.</p>
          <form className="flex-form" onSubmit={submitHandler}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="form"
              type="text"
              placeholder="Username "
            />
            <input
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
            <button className="button" type="submit">Register</button>
          </form>
          {duplicateUser ? "": <div className="dub-message">Login already exists. </div> }
    
          {duplicateEmail ? "": <div className="dub-message">Email already exists. </div> }
          {emailUsernameCorrect ?<div>User created</div>:""}
          </div>
          <div className="sign-up">
  <p className="no-acc">Have an account?  </p>
  <span onClick={() => setSignUp(!signUp)} className="sign-up-text">         
    Log in
  </span>
  </div>
         
          </div> }

    </>
  );
};






