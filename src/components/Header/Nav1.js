import React from "react";
import './Nav1.css';
import images from "../Container/Images";

function Nav1(){

    return(

        <div className="nav-1">
            <a className="logo" href="#logo">facebook</a>
            <ul className="nav-1-btns">
                <li><button><img src={images.add}></img></button></li>
                <li><button><img src={images.search}></img></button></li>
                <li><button><img src={images.messenger}></img></button></li>
            </ul>
        </div>
    )
}

export default Nav1