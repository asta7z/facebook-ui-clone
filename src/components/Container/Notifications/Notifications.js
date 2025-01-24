import '../Notifications/Notification.css'
import Notif from './Notif'
import NotiBar from './NotiBar'

function Notifications(){
    return(
        <div className='notifications-section'>
            <NotiBar />
            <Notif name='ken'/>
            <Notif name='azossama'/>
            <Notif name='didin'/>
            <Notif name='aruma'/>
            <Notif name='floppa'/>
            <Notif name='aymendjf'/>
            <Notif name='kaori'/>
            <Notif name='kai'/>
        </div>
    )
}

export default Notifications