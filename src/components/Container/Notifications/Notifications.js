import images from '../Images'
import friends from '../Profile/friends'
import '../Notifications/Notification.css'
import Notif from './Notif'
import NotiBar from './NotiBar'

function Notifications(){
    return(
        <div className='notifications-section'>
            <h1>notifications</h1>
            <Notif
                userPfp={friends.ken[1]}
                userReact={images.love}
            />
        </div>
    )
}

export default Notifications