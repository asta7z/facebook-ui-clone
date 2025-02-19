import React from "react";
import './Container.css'
import images from "./Images";

function Container(props){

    return(
        <div className="boddy" style={{backgroundImage:`url(${images.bg1})`}}>
            <div className="blur-effect">
                <div id="scrollbarY" className="main scrollbar-y">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Container