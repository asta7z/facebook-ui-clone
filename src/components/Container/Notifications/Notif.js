import images from '../Images'
import '../Notifications/Notif.css'

function Notif(props){
    return(
        <div className='notification-container'>
            <div className='profiles'>
                <img className='user-pfp' src={props.userPfp} alt='user-pfp'></img>
                <img className='reaction' src={props.userReact} alt='reaction'></img>
            </div>
            <div className='notif-content'>
                <p className='content'><span className='user-name'>{props.username}</span> {props.action} to your {props.notifContent}</p>
                <p className='info'>20h &bull; 1 reaction</p>
            </div>
            <button style={{backgroundImage: `url(${images.more})`}} className='more-btn'>
            </button>
        </div>
    )
}

export default Notif