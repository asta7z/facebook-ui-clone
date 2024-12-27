import '../Notifications/Notif.css'

function Notif(props){
    return(
        <div className='notification-container'>
            <div className='profiles'>
                <img className='user-pfp' src={props.userPfp}></img>
                <img src={props.userReact}></img>
            </div>
            <div className='notif-content'>
                <p>{props.notifContent}</p>
            </div>
        </div>
    )
}

export default Notif