import './Nav3.css'
import { Link, useLocation } from "react-router-dom";
import info from './Info';


import images from "./Images";

function Nav3(){

    return(
        <div className="nav-3">
            <Link to='/profile'><button><img src={info.user_pfp}></img></button></Link>
            <button>What's on your mind?</button>
            <button style={{backgroundImage:`url(${images.addpic})`}}></button>
        </div>
    )
}

export default Nav3