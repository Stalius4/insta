
import { useEffect, useState } from "react";
import Feed from './components/feed';
import {Login, SignUp} from './components/login/login';
import {fetchPhotos, listUsers} from "../src/utils/utils"
import {Display, UserDisplay} from "./components/Display"
import {UserList} from "./components/userList/userlist"
import "./App.css"
import  {delUser} from "./utils/utils"
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
 
  }, [])


  return (
    <div className="App">
       <div>{jwt ? <Display randomPic={randomPic}/> : <Login user={user} setter={setUser} setJwt={setJwt} jwt={jwt} setDuplicateUser={setDuplicateUser} duplicateUser={duplicateUser} duplicateEmail={duplicateEmail} setDuplicateEmail={setDuplicateEmail}/>}</div>
    <UserDisplay  user={user} userList={userList} setUserList={setUserList}/>
{/* <UserList></UserList> */}
    
      {/* {randomPic.map((item, index) =>{
        return (
         <Feed key={index} item= {item}></Feed>

        )
      })} */}
       
    </div>
  );
}

export default App;
