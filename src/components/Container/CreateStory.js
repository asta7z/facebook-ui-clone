import React from "react";
import './CreateStory.css';
import images from "./Images";
import info from "./Info";

function CreateStory(){

    return(
        <div style={{backgroundImage:`url(${info.user_pfp})`}} className="stories create-story">
            <button>
                <img src={images.add}></img>
            </button>
            <p>Create story</p>
        </div>
    )
}

export default CreateStory