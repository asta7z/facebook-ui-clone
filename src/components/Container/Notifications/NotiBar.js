import React from "react"
import '../Nav4.css'
import images from "../Images"

function NotiBar(){

    return(
        <div className="nav-4">
            <h5 className="logo">Notifications</h5>
            <button><img src={images.search} alt="search"></img></button>
        </div>
    )
}

export default NotiBar