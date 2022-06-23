
import { useEffect, useState } from "react";
import Feed from './components/feed';
import {Login, SignUp} from './components/login/login';
import {fetchPhotos, listUsers} from "../src/utils/utils"
import Display from "./components/Display"
import "./App.css"
function App() {
  const [user, setUser] = useState();
  const [randomPic, setRandomPic] = useState([])
  const [userList, setUserList] = useState([])
 const [jwt, setJwt] = useState (false)
 const[duplicateUser, setDuplicateUser] = useState(true)
 const[duplicateEmail, setDuplicateEmail] = useState(true)
  useEffect (() => {
    fetchPhotos(setRandomPic)
    listUsers(setUserList)
    console.log(userList,"useris")
    console.log(randomPic,"userisddsjdasdasfd")
  }, [])


  return (
    <div className="App">
       <div>{jwt ? <Display randomPic={randomPic}/> : <Login user={user} setter={setUser} setJwt={setJwt} jwt={jwt} setDuplicateUser={setDuplicateUser} duplicateUser={duplicateUser} duplicateEmail={duplicateEmail} setDuplicateEmail={setDuplicateEmail}/>}</div>
    
       {/* {userList.map((item, index) =>{
        return (
         <div key={index} >{item[1]}</div>

        )
      })} */}
    
      {randomPic.map((item, index) =>{
        return (
         <Feed key={index} item= {item}></Feed>

        )
      })}
       
    </div>
  );
}

export default App;
