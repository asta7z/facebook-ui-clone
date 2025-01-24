import React from "react"
import './FeedPosts.css'
import Post from "./Post"
import SepLine from "../SepLine/SepLine"

function FeedPosts(){

    return(
        <>
            <Post name='floppa' />
            <SepLine />
            <Post name='kai' />
            <SepLine />
            <Post name='didin' />
        </>
    )
}

export default FeedPosts
