import Feed from "./feed"


 const Display= ({randomPic}) => {
console.log(randomPic)
    return (<div>
        {randomPic.map((item, index) => {
            return (
             <Feed key={index} item= {item}></Feed>
    
            )
          })}
   </div>
    )
}

export default Display;