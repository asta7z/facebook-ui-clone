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

        </div>
    )
}

export default RequestsSection
