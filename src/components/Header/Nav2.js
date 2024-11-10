import './Nav2.css'
import images from "../Container/Images";

import { Link, useLocation } from "react-router-dom";



function Nav2(){

    const location = useLocation();

    let homeSt = '';
    let homeOpacity = '.7';
    let homeIcon = images.home;

    let requestsSt = '';
    let requestsOpacity = '.7';
    let requestsIcon = images.requests;

    let pfpSt = '';
    let pfpOpacity = '.7';
    let pfpIcon = images.profile;

    if(location.pathname === '/'){
        homeSt = 'active-btn';
        homeOpacity = '1';
        homeIcon = images.homeactive;
    };

    if(location.pathname === '/requests'){
        requestsSt = 'active-btn';
        requestsOpacity = '1';
        requestsIcon = images.requestsactive;
    };

    if(location.pathname === '/profile'){
        pfpSt = 'active-btn';
        pfpOpacity = '1';
        pfpIcon = images.profileactive;
    };


    return(
        <div className="nav-2">
                
                <button className={homeSt}>
                    <Link to='/'>
                        <img style={{width:'34px',height:'34px',transform:'translateY(-1px)',opacity:homeOpacity}} src={homeIcon}></img>
                    </Link>
                </button>
                <button className={requestsSt}>
                    <Link  to='/requests'>
                        <img
                            style={
                                {
                                    width:'27px',
                                    height:'27px',
                                    opacity:requestsOpacity
                                }
                            }
                            src={requestsIcon}>
                        </img>
                    </Link>
                </button>
                <button><img style={{width:'27px',height:'27px',transform:'translateY(-1px)'}} src={images.watch}></img></button>
                <button className={pfpSt}>
                    <Link to='/profile'>
                        <img
                            style={
                                {
                                    width:'27px',
                                    height:'27px',
                                    opacity:pfpOpacity
                                }
                            }
                            src={pfpIcon}>
                        </img>
                    </Link>
                </button>
                <button><img style={{width:'27px',height:'27px'}} src={images.notification}></img></button>
                <button><img style={{width:'32px',height:'32px',transform:'translateY(-1px)'}} src={images.menu}></img></button>
            
        </div>
    )
}

export default Nav2