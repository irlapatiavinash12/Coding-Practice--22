// Write your JS code here

import './index.css'

const UserInfo = () => {
  return (
    <div className="home-user-details">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="user-img-details"
      />
      <h3 className="user-name-text">Wade Warren</h3>
      <p className="user-description">Software developer at UK</p>
    </div>
  )
}

export default UserInfo
