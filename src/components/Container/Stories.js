import React from "react";
import CreateStory from "./CreateStory";
import Story from "./Story";
import './Stories.css';
import info from "./Info";
import friends from "./Profile/friends";

import images from "./Images";

function Stories(){

    return(
        <div className="scrollbar-x">
            <div className="stories-section">
                <CreateStory story={info.user_pfp} />
                <Story userpfp={info.user_pfp} username='Your story' story={images.nature1}/>
                <Story userpfp={images.ronaldo2} username='Ronaldo' story={images.ronaldo1}/>
                <Story userpfp={images.levi9} username='Ossama' story={images.musicsCover}/>
                <Story userpfp={friends.friend12[1]} username={friends.friend12[0]} story={images.weird1}/>
                <Story userpfp={images.genos1} username='Genos' story={images.opmanga3}/>
                <Story userpfp={images.floppa1} username='Floppa' story={images.makima1}/>
            </div>
        </div>
    )
}

export default Stories