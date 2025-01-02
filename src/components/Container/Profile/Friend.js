import friends from "./friends";
import React from "react";

const Friend = ({name}) => {
    const [friendName, image] = friends[name];

    return(
        <a href='#friend'>
            <img src={image} alt={friendName}></img>
            <p>{friendName}</p>
        </a>
    );
}

export default Friend