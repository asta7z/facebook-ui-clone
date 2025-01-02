import React from "react";
import friends from "./Profile/friends";
import './Story.css'

const Story = ({name, props}) => {
    const [friendName, image, date, mult1, mult2, count, story] = friends[name];

    return(
        <div style={{backgroundImage:`url(${story})`,backgroundColor:`#242527`}} className="stories story">
            <img className="story-user" src={image}></img>
            <p>{friendName}</p>
        </div>
    )
}

export default Story