
import { useEffect, useState } from "react";
import Feed from './components/feed';
import Login from './components/login/login';


function App() {
  const [randomPic, setRandomPic] = useState([])
  const fetchData =  async () => {
    try {
    const response = await fetch("https://picsum.photos/v2/list?page=3&limit=10")
    const data = await response.json()
    if (!response.ok){
      throw new Error(response.statusText)
    }
    console.log(response)
    setRandomPic(data)
    console.log(randomPic)
    } catch (err) {
      // console.log(err)
    }
  }
  
 
  useEffect (() => {
    fetchData()
    
  }, [])


  return (
    <div className="App">
      <Login></Login>
      {randomPic.map((item, index) =>{
        return (
         <Feed index={index} item= {item}></Feed>

        )
      })}
       
    </div>
  );
}

export default App;
