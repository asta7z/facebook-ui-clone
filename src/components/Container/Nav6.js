import React from "react"
import './Nav6.css'

function Nav6(props){

    return(
        <div className="nav-6">
            <h5>
                Friend requests <span>{props.requests}</span>
            </h5>
            <button>See all</button>
        </div>
    )
}

export default Nav6