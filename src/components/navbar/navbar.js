import "./navbar.css"

import instaLogo from "./icons/insta.png"

import {Link, Outlet} from "react-router-dom"

import instaHome from "./icons/home.png"
import instaPlane from "./icons/plane.png"
import instaAdd from "./icons/add.png"
import instaExplore from "./icons/explore.png"
import instaHeart from "./icons/heart.png"

export const NavBar = () => {
    return(<selection>
        <div className="navbar-flex-outside">

       
        <div className="navbar-flex">
<img className="navbar-logo" src={instaLogo} alt="Logo" />
<input placeholder="Search" className="navbar-search"></input>
<div className="navbar-icon-flex">
<img className="navbar-icon" src={instaHome} alt="Home" />
<img className="navbar-icon" src={instaPlane} alt="Plane" />
<img className="navbar-icon" src={instaAdd} alt="Add" />
<img className="navbar-icon" src={instaExplore} alt="Explore" />
<img className="navbar-icon" src={instaHeart} alt="Heart" />
{/* <img src="" alt="" /> */}
</div>



</div>

        </div>
        <Outlet/>
        </selection>
    )
}