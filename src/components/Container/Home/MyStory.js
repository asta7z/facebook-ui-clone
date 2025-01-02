import React from "react"
import images from "../Images"
import friends from "../Profile/friends"
import info from "../Info";

const MyStory = () => {

    return(
        <div style={{backgroundImage:`url(${info.my_story})`,backgroundColor:`#242527`}} className="stories story">
            <img className="story-user" src={info.user_pfp}></img>
            <p>Your story</p>
        </div>
    );
}

export default MyStory