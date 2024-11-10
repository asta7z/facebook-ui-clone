import React from "react"
import './ProfilePosts.css'
import Post from "../Post"
import SepLine from "../../SepLine/SepLine"
import images from "../Images"
import info from "../Info"
import friends from "./friends"

function ProfilePosts(){
    return(
        <>
            <Post 
                username={info.username}
                userpfp={info.user_pfp}
                date='52m'
                vIcon='d-none'
                audience={images.earth}
                status={images.verified}
                caption=""
                post={images.post1}
                StReact={images.sad}
                NdReact={images.haha}
                RdReact={images.angry}
                reach='16'
                comments='3'
                shares='2'
                c_s='d-block'
                close='none'
            />

            <SepLine />

            <Post 
                username={info.username}
                userpfp={info.user_pfp}
                date='1d'
                vIcon='d-none'
                audience={images.earth}
                status={images.verified}
                caption="Max Payne (2005)"
                post={images.post2}
                StReact={images.sad}
                NdReact={images.love}
                RdReact={images.care}
                reach='16'
                comments='3'
                shares='19'
                c_s='d-block'
                close='none'
            />

            <SepLine />
        </>
    )
}

export default ProfilePosts
