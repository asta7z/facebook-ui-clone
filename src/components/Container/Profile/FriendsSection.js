import './Profile.css'
import friends from './friends'
import './FriendsSection.css'
import Friend from './Friend'

function FriendsSection(){
    return(
        <>
            <div className='friends-section'>
                <h1>Friends</h1>
                <div className='friends'>
                    <Friend name='azossama' />
                    <Friend name='ken' />
                    <Friend name='aruma' />
                    <Friend name='aymendjf' />
                    <Friend name='kai' />
                    <Friend name='didin' />
                </div>
                <button>See all friends</button>
            </div>
        </>
    )
}

export default FriendsSection