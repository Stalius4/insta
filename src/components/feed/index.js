import logo from './more.png';
import smile from './smile.png';
import heart from './heart.png';
import plane from './plane.png';
import ribbon from './ribbon.png';
import speech from './speech-bubble.png';
import './index.css';
const Feed =({item, index})=>{
  
return (

    <div  className="container" key ={index}>
    <div className='flex-title'>
      <h1 className='title'>{item.author}</h1>
      <img src={logo} alt="logo" height={16}></img>
      </div>
    
    <img src={item.download_url} alt="fd" width={498} height={250}/>
    <div className='flex-icons'>
    <div className='icons'>
      <img className="icon" src={heart} alt="heart" height={25}  />
      <img className="icon" src={speech} alt="heart" height={25}  />
      <img className="icon" src={plane} alt="heart" height={25}  />
    </div>
    <img className="icon" src={ribbon} alt="heart" height={25}  />
  </div>
  <div className="flex-comment">
    <img src={smile} alt="smile" height={25}/>
    <input type="text" placeholder="Add a comment..."className='input' />
    <div className='post'>Post</div>
  </div>

  </div>
)
}

export default Feed