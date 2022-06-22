
import { useEffect, useState } from "react";
import Feed from './components/feed';
import Login from './components/login/login';
import {fetchPhotos} from "../src/utils/utils"
import Display from "./components/Display"
function App() {
  const [user, setUser] = useState();
  const [randomPic, setRandomPic] = useState([])
 const [jwt, setJwt] = useState (false)
 
  useEffect (() => {
    fetchPhotos(setRandomPic)
    
  }, [])


  return (
    <div className="App">
       <div>{jwt ? <Display randomPic={randomPic}/> : <Login setter={setUser} setJwt={setJwt} jwt={jwt}></Login>}</div>
    
      
    
      {/* {randomPic.map((item, index) =>{
        return (
         <Feed key={index} item= {item}></Feed>

        )
      })} */}
       
    </div>
  );
}

export default App;
