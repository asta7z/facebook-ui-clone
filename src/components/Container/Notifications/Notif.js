import React from "react"
import images from '../Images'
import '../Notifications/Notif.css'
import friends from '../Profile/friends'
import NotiInfo from './NotiInfo'

function Notif({name}){

    const [friendName, image] = friends[name];
    const [reaction, content, action, time, count] = NotiInfo[name];

    return(
        <div className='notification-container'>
            <div className='profiles'>
                <img className='user-pfp' src={image} alt='user-pfp'></img>
                <img className='reaction' src={reaction} alt='reaction'></img>
            </div>
            <div className='notif-content'>
                <p className='content'><span className='user-name'>{friendName}</span> {action} to your {content}</p>
                <p className='info'>{time} &bull; {count} reaction</p>
            </div>
            <button style={{backgroundImage: `url(${images.more})`}} className='more-btn'>
            </button>
        </div>
    )
}

export default Notif