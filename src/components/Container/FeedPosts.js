import React from "react"
import './FeedPosts.css'
import Post from "./Post"
import SepLine from "../SepLine/SepLine"
import images from "./Images"
import info from "./Info"
import friends from "./Profile/friends"
import data from '../../data.json'

function FeedPosts(){

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
            />

            <SepLine />

            <Post
                username='Cristiano Ronaldo'
                userpfp={images.ronaldo2}
                date='2d'
                audience={images.earth}
                status={images.verified}
                post={images.ronaldo1}
                StReact={images.like}
                NdReact={images.love}
                RdReact={images.care}
                reach='7.3M'
                comments='12.1K'
                shares='3K'
                c_s='d-block'
            />

            <SepLine />

            <Post
                username={friends.friend8[0]}
                userpfp={friends.friend8[1]}
                date='1d'
                audience={images.earth}
                status={images.verified}
                caption=""
                post={images.post2}
                StReact={images.sad}
                NdReact={images.love}
                RdReact={images.care}
                reach='27'
                comments='11'
                shares='4'
                c_s='d-block'
            />

            <SepLine />

            <Post
                username='Leo Messi'
                userpfp={images.messi1}
                date='28m'
                audience={images.earth}
                status={images.verified}
                caption=""
                post={images.messi2}
                StReact={images.like}
                NdReact={images.love}
                RdReact={images.haha}
                reach='143K'
                comments='1.3K'
                shares='2K'
                c_s='d-block'
            />

            <SepLine />

            <Post 
                username='Syc'
                userpfp={images.syc1}
                date='2h'
                audience={images.earth}
                status={images.verified}
                caption=""
                post={images.syc1}
                StReact={images.care}
                NdReact={images.love}
                RdReact={images.like}
                reach='4.3K'
                comments='1.2K'
                shares='134'
                c_s='d-block'
            />

            <SepLine />

            <Post 
                username={friends.friend10[0]}
                userpfp={friends.friend10[1]}
                date='14m'
                vIcon='d-none'
                audience={images.earth}
                status={images.verified}
                caption=""
                post={images.artisan1}
                StReact={images.love}
                NdReact={images.care}
                RdReact={images.haha}
                reach='2K'
                comments='102'
                shares='24'
                c_s='d-block'
            />

            <SepLine />

            <Post 
                username={friends.friend9[0]}
                userpfp={friends.friend9[1]}
                date='50m'
                
                audience={images.earth}
                status={images.verified}
                caption=""
                post={images.didinchan}
                StReact={images.love}
                NdReact={images.care}
                RdReact={images.haha}
                reach='1.6K'
                comments='177'
                shares='54'
                c_s='d-block'
            />

            <SepLine />

            <Post 
                username={friends.friend13[0]}
                userpfp={friends.friend13[1]}
                date='17m'
                vIcon='d-none'
                audience={images.earth}
                status={images.verified}
                caption=""
                post={images.abyss_meme}
                StReact={images.haha}
                NdReact={images.sad}
                RdReact={images.like}
                reach='2K'
                comments='102'
                shares='42'
                c_s='d-block'
            />
        </>
    )
}

export default FeedPosts
