
import { useEffect, useState } from "react";
import { NavBar} from './components/navbar/navbar';
import {Login, SignUp} from './components/login/login';
import {fetchPhotos, listUsers} from "../src/utils/utils"
import {Display, UserDisplay} from "./components/Display"
import {UserList} from "./components/userList/userlist"
import "./App.css"
import  {delUser} from "./utils/utils"
import { ProtectedRoute } from "./components/protectedRoute/protectedRoute";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login user={user} setter={setUser} setJwt={setJwt} jwt={jwt} setDuplicateUser={setDuplicateUser} duplicateUser={duplicateUser} duplicateEmail={duplicateEmail} setDuplicateEmail={setDuplicateEmail} />}/>
        <Route   path="/main" element ={
        <ProtectedRoute jwt={jwt}>
          <Display randomPic={randomPic}/>
        </ProtectedRoute>}/> 
        <Route path="/na" element ={<NavBar />}/> 
          
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
