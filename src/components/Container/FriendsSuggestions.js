import React from "react"
import './FriendsSuggestions.css'
import images from "./Images"
import fSuggestion from "./fSuggestion"

function FriendsSuggestions(){

    return(
        <div className="scrollbar-x">
            <div className="fs-section">
                <fSuggestion />
            </div>
        </div>
    )
}

export default FriendsSuggestions