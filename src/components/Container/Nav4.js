import React from "react"
import './Nav4.css'
import images from "./Images"

function Nav4(){

    return(
        <div className="nav-4">
            <h5 className="logo">Friends</h5>
            <button><img src={images.search}></img></button>
        </div>
    )
}

export default Nav4