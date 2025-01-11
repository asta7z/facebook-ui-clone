import React from "react";
import CreateStory from "./CreateStory";
import Story from "./Story";
import './Stories.css';
import info from "./Info";
import MyStory from "./Home/MyStory";

function Stories(){

    return(
        <div className="scrollbar-x">
            <div className="stories-section">
                <CreateStory story={info.user_pfp} />
                <MyStory />
                <Story name='ken' />
                <Story name='floppa' />
                <Story name='kai' />
                <Story name='didin' />
            </div>
        </div>
    )
}

export default Stories