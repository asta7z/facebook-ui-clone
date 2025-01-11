import './Profile.css'
import images from '../Images'
import SepLine from '../../SepLine/SepLine'
import info from '../Info'
import FriendsSection from './FriendsSection'
import ProfilePosts from './ProfilePosts'
import { useState } from 'react'

function Profile(){
    /* eslint-disable no-unused-vars*/
    const [username, setUsername] = useState(info.username);
    
    const nameChanger = () => {
        const newName = prompt("Enter new name: ");

        if (newName !== null) {
            const newNameLength = newName.length;
            if (newNameLength <= 1) {
                setUsername("asta絆");
                info.username = "asta絆";
            }
            else {
                setUsername(newName);
                info.username = newName.substring(0, 1).toUpperCase() + newName.substring(1);
            }
        }

        else {
            setUsername("asta絆");
            info.username = "asta絆";
        }
    };

    return(
        <div className='profile-section'>
            <div className='nav-1'>
                <button>{info.username} <img src={images.down} alt='down'></img></button>
                <button onClick={nameChanger} className='edit-btn'>
                    <img src={images.profileedit} alt='edit icon'></img>
                </button>
            </div>

            <div className='cover-pic' style={{backgroundImage:`url(${info.user_cover})`}}>
                <div className='profile-pic'>
                    <img id='profile-picture' src={info.user_pfp} alt='user pfp'></img>
                </div>
            </div>

            <div className='user-info-1'>
                <h4 className='username'>{info.username} <span><img src={images.verified
                } alt='verified' /></span></h4>
                <p className='bio'>
                    {info.bio}
                </p>
                <div className='story-edit-more'>
                    <button><img src={images.add} alt='add'></img>Add to story</button>
                    <button><img src={images.edit} alt='edit'></img>Edit profile</button>
                    <button><img src={images.more} alt='more'></img></button>
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
                    <p><img src={images.instagram} alt='instagram'></img> <a href={`https://www.instagram.com/${info.user_ig_p}`}>{info.user_ig_p}</a></p>
                    <p><img src={images.twitter} alt="twitter"></img> <a href={`https://www.twitter.com/${info.user_x_p}`}>{info.user_x_p}</a></p>
                    <p><img src={images.more} alt='more'></img> See your About info</p>
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