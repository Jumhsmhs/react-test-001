import React from 'react'
import {useParams} from 'react-router-dom'

function Profile() {
    const { username } = useParams();
  return (
    <div>
      <h3>Profile</h3>
      <p>The id of this uers is {username}</p>
    </div>
  );
}

export default Profile