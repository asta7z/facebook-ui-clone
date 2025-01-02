import React from "react"
import './RequestsSection.css'
import Request from "./Request"

const RequestsSection = () => {

    return(
        <div className="requests-section">
            <Request name='ken'/>
            <Request name='floppa' />
            <Request name='didin'/>
            <Request name='aymendjf'/>
            <Request name='kai'/>
            <Request name='kaori'/>
            <Request name='voizone'/>

        </div>
    )
}

export default RequestsSection