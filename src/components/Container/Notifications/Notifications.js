import images from '../Images'
import friends from '../Profile/friends'
import '../Notifications/Notification.css'
import Notif from './Notif'

function Notifications(){
    return(
        <div className='notifications-section'>
            <Notif
                userPfp={friends.ken[1]}
            />
        </div>
    )
}

export default Notifications