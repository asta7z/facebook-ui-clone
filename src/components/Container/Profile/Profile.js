import './Profile.css'
import images from '../Images'
import SepLine from '../../SepLine/SepLine'
import info from '../Info'
import FriendsSection from './FriendsSection'
import ProfilePosts from './ProfilePosts'

function Profile(){

    return(
        <div className='profile-section'>
            <div className='nav-1'>
                <button>{info.username} <img src={images.down}></img></button>
                <button className='edit-btn'>
                    <img src={images.profileedit}></img>
                </button>
            </div>

            <div className='cover-pic' style={{backgroundImage:`url(${info.user_cover})`}}>
                <div className='profile-pic'>
                    <img id='profile-picture' src={info.user_pfp}></img>
                </div>
            </div>

            <div className='user-info-1'>
                <h4 className='username'>{info.username}</h4>
                <p className='bio'>
                    {info.bio}
                </p>
                <div className='story-edit-more'>
                    <button><img src={images.add}></img>Add to story</button>
                    <button><img src={images.edit}></img>Edit profile</button>
                    <button><img src={images.more}></img></button>
                </div>
            </div>

            <SepLine />

            <div className='navbar-2'>
                <button className='active-btn'>Posts</button>
                <button>Reels</button>
                <button>Videos</button>
            </div>
            
            <div className='details-section'>
                <h1>Details</h1>
                <div className='details'>
                    {/* <p><img src={images.followers}></img> Followed by 241 people</p> */}
                    <p><img src={images.instagram}></img> <a href={`https://www.instagram.com/${info.user_ig}`}>{info.user_ig}</a></p>
                    {/* <p><img src={images.twitter}></img> <a href=''>A'z O'ssama</a></p> */}
                    <p><img src={images.more}></img> See your About info</p>
                </div>
                <button className='active-btn'>Edit public details</button>
            </div>
            <FriendsSection />
            <SepLine />
            <ProfilePosts />
        </div>
    )
}

export default Profile