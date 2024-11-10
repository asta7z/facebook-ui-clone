import React from "react"
import './Request.css'

function Request(props){

    return(
        <div className="request">
            <div className="user-pfp">
                <img src={props.UserPfp}></img>
            </div>

            <div className="request-info">
                <div className="username-date">
                    <h6 className="username">
                        {props.Username}
                        <span className="date">{props.Date}</span>
                    </h6>
                </div>
                
                <div className="mutual-friends">
                    <div className="mutual-pfps">
                        <img src={props.Mtl1}></img>
                        <img src={props.Mtl2}></img>
                    </div>
                    <div className="mutual-count">
                        <p>{props.MtlCount} mutual friends</p>
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