import React from 'react'
import profileimg from '../photoid.png';

const ProfilePhoto = () => {
    return (
        <div>
            
          <img src={profileimg}   className="rounded-circle" width="150" height="150"  alt ='imageprofile' />
        </div>
    )
}

export default ProfilePhoto


