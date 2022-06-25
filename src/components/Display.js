import Feed from "./feed"
import {UserList} from "./userList/userlist"
import "./display.css"
import { useState, useEffect } from "react";
import { delUser } from "../utils/utils";
import {Link, Outlet} from "react-router-dom"



export const Display= ({randomPic}) => {
console.log(randomPic, "randpic")
    return (<div className="display-gap">
        {randomPic.map((item, index) => {
            return (
             <Feed key={index} item= {item}></Feed>
    
            )
          })}
         
   </div>
    )
}






export const UserDisplay = ({ userList, setUserList}) => {
    console.log(userList, "userlist");

    const deleteUser = (username ,index) => {
        delUser(username);
        //delUser function from utils.js deleting user from mongoDb
        let result = [...userList]
        result.splice(index, 1)
        setUserList(result)
        console.log(userList)
      
      
      }
      



    return (
     
                <div>
                    <UserList></UserList>
        {userList.map((item, index) => {
          return (
            <div className="flex-list-container" key={index}>
              <div className="id-display">  {item._id}</div>
              <div className="id-display" >{item.username}</div>
              <div className="id-display" >{item.email}</div>
              <button onClick={(e) =>deleteUser(item.username, index)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  };

