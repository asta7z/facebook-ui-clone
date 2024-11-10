import React from "react";
import './CreateStory.css';
import images from "./Images";

function CreateStory(props){

    return(
        <div style={{backgroundImage:`url(${props.story})`}} className="stories create-story">
            <button>
                <img src={images.add}></img>
            </button>
            <p>Create story</p>
        </div>
    )
}

export default CreateStory