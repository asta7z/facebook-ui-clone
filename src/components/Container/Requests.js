import React from "react"
import "./Requests.css"
import Nav4 from "./Nav4"
import Nav5 from "./Nav5"
import Nav6 from "./Nav6"
import RequestsSection from "./RequestsSection"

function Requests(){
    
    return(
        <div className="requests-container">
            <Nav4 />
            <Nav5 />
            <Nav6 requests={180} />
            <RequestsSection />
        </div>
    )
}

export default Requests