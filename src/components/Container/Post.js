import React from "react";
import images from "./Images";

function Post(props){

    return(
        <div className="post">
            <div className="post-header">
                <img id="poster" className="poster-pfp" src={props.userpfp}></img>
                <label htmlFor="poster">
                    <h6 className="text-light">{props.username}
                        <span className={props.vIcon}><img src={props.status}></img></span>
                    </h6>
                    <p>{props.date} &bull; <img src={props.audience}></img></p>
                </label>
                <div className="options">
                    <button><img src={images.more} alt=""></img></button>
                    <button><img src={images.close} alt="" style={{display:`${props.close}`}}></img></button>
                </div>
            </div>

            <div className="post-content">
                <p>{props.caption}</p>
                <img src={props.post}></img>
                <div className="reactions">
                    <img src={props.StReact}></img>
                    <img src={props.NdReact}></img>
                    <img src={props.RdReact}></img>
                    <p>{props.reach}</p>
                    <div className='coms-shares'>
                        <p className={props.c_s}>
                            {props.comments} comments · {props.shares} shares
                        </p>
                    </div>
                </div>
            </div>

            <div className="post-actions">
                <button><img src={images.thumb}></img> like</button>
                <button><img src={images.comment}></img> comment</button>
                <button><img src={images.share}></img> share</button>
            </div>
        </div>
    )
}

export default Post