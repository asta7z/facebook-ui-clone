import '../Notifications/Notif.css'

function Notif(props){
    return(
        <div className='notification-container'>
            <div className='profiles'>
                <img className='user-pfp' src={props.userPfp} alt='user-pfp'></img>
                <img className='reaction' src={props.userReact} alt='reaction'></img>
            </div>
            <div className='notif-content'>
                <p>{props.notifContent}</p>
            </div>
        </div>
    )
}

export default Notif