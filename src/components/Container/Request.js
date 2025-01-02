import React from "react"
import './Request.css'
import friends from "./Profile/friends";

const Request = ({name}) => {

    const [friendName, image, date, mult1, mult2, rDate] = friends[name];

    return(
        <div className="request">
            <div className="user-pfp">
                <img src={image} alt={friendName}></img>
            </div>

            <div className="request-info">
                <div className="username-date">
                    <h6 className="username">
                        {friendName}
                        <span className="date">{date}</span>
                    </h6>
                </div>
                
                <div className="mutual-friends">
                    <div className="mutual-pfps">
                        <img src={mult1}></img>
                        <img src={mult2}></img>
                    </div>
                    <div className="mutual-count">
                        <p>{rDate} mutual friends</p>
                    </div>
                </div>

                <div className="request-actions">
                    <button>confirm</button>
                    <button>delete</button>
                </div>
            </div>
        </div>
    )
}

export default Request