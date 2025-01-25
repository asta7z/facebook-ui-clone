/* eslint-disable jsx-a11y/alt-text */
import './Nav2.css'
import images from "../Container/Images";
import Icons from '../Container/Icons';

import { Link, useLocation } from "react-router-dom";



function Nav2(){

    const location = useLocation();

    let homeSt = '';
    let homeOpacity = '.7';
    let homeIcon = Icons.Home;

    let requestsSt = '';
    let requestsOpacity = '.7';
    let requestsIcon = Icons.Requests;

    let pfpSt = '';
    let pfpOpacity = '.7';
    let pfpIcon = Icons.Profile;

    let notifSt = '';
    let notifOpacity = '.7';
    let notifIcon = images.notification;

    if(location.pathname === '/'){
        homeSt = 'active-btn';
        homeOpacity = '1';
        homeIcon = Icons.HomeActive;
    };

    if(location.pathname === '/requests'){
        requestsSt = 'active-btn';
        requestsOpacity = '1';
        requestsIcon = Icons.RequestsActive;
    };

    if(location.pathname === '/profile'){
        pfpSt = 'active-btn';
        pfpOpacity = '1';
        pfpIcon = Icons.ProfileActive;
    };

    if(location.pathname === '/notifications'){
        notifSt = 'active-btn';
        notifOpacity = '1';
        notifIcon = images.notification;
    };


    return(
        <div className="nav-2">
                
                <button className={homeSt}>
                    <Link to='/'>
                        <img style={{width:'25px',height:'25px',transform:'translateY(-1px)',opacity:homeOpacity}} src={homeIcon}></img>
                    </Link>
                </button>
                <button className={requestsSt}>
                    <Link  to='/requests'>
                        <img
                            style={
                                {
                                    height:'25px',
                                    opacity:requestsOpacity
                                }
                            }
                            src={requestsIcon}>
                        </img>
                    </Link>
                </button>
                <button><img style={{height:'29px',transform:'translateY(3px)'}} src={Icons.Watch}></img></button>
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
                <button className={notifSt}>
                    <Link to='/notifications'>
                        <img
                            style={
                                {
                                    width:'27px',
                                    height:'27px',
                                    opacity:notifOpacity
                                }
                            }
                            src={notifIcon}>
                        </img>
                    </Link>
                </button>
                <button><img style={{width:'32px',height:'32px',transform:'translateY(-1px)'}} src={images.menu}></img></button>
            
        </div>
    )
}

export default Nav2