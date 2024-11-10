import React from "react";
import './Content.css';
import './Nav3'
import Nav3 from "./Nav3";
import SepLine from "../SepLine/SepLine";
import Stories from "./Stories";
import Posts from "./FeedPosts";

function Content(){

    return(
        <div>
            <Nav3 />
            <SepLine />
            <Stories />
            <SepLine />
            <Posts />
        </div>
    )
}

export default Content