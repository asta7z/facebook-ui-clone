import React from "react"
import images from "./Images"
import PostsInfo from "./Home/PostsInfo"
import friends from "./Profile/friends"

function Post({name}){

    const [friendName, image] = friends[name];
    const [post, date, isVerified, audience, status, caption, react1, react2, react3, reach, comments, shares, c_s, close] = PostsInfo[name];

    return(
        <div className="post">
            <div className="post-header">
                <img id="poster" className="poster-pfp" src={image} alt={friendName} loading='lazy'></img>
                <label htmlFor="poster">
                    <h6 className="text-light">{friendName}
                        <span className={isVerified}><img src={status} alt="verified" loading='lazy'></img></span>
                    </h6>
                    <p>{date} &bull; <img src={audience} alt="audience"></img></p>
                </label>
                <div className="options">
                    <button><img src={images.more} alt="more" loading='lazy'></img></button>
                    <button><img src={images.close} alt="close" style={{display:`${close}`}} loading='lazy'></img></button>
                </div>
            </div>

            <div className="post-content">
                <p>{caption}</p>
                <img src={post} alt="post" loading='lazy'></img>
                <div className="reactions">
                    <img src={react1} alt="reaction" loading='lazy'></img>
                    <img src={react2} alt="reaction" loading='lazy'></img>
                    <img src={react3} alt="reaction" loading='lazy'></img>
                    <p>{reach}</p>
                    <div className='coms-shares'>
                        <p className={c_s}>
                            {comments} comments · {shares} shares
                        </p>
                    </div>
                </div>
            </div>

            <div className="post-actions">
                <button><img src={images.thumb} alt="thumb" loading='lazy'></img> like</button>
                <button><img src={images.comment} alt="comment" loading='lazy'></img> comment</button>
                <button><img src={images.share} alt="share" loading='lazy'></img> share</button>
            </div>
        </div>
    )
}

export default Post