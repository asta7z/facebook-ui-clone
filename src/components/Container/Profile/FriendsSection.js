import './Profile.css'
import friends from './friends'
import './FriendsSection.css'

function FriendsSection(){
    return(
        <>
            <div className='friends-section'>
                <h1>Friends</h1>
                <div className='friends'>
                    <a href='#'><img src={friends.friend8[1]}></img><p>{friends.friend8[0]}</p></a>
                    <a href='#'><img src={friends.friend2[1]}></img><p>{friends.friend2[0]}</p></a>
                    <a href='#'><img src={friends.friend3[1]}></img><p>{friends.friend3[0]}</p></a>
                    <a href='#'><img src={friends.friend7[1]}></img><p>{friends.friend7[0]}</p></a>
                    <a href='#'><img src={friends.friend9[1]}></img><p>{friends.friend9[0]}</p></a>
                    <a href='#'><img src={friends.friend11[1]}></img><p>{friends.friend11[0]}</p></a>
                </div>
                <button>See all friends</button>
            </div>
        </>
    )
}

export default FriendsSection