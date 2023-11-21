import React from 'react';
import './Profile.css';

const Profile = () => {
    const profileData = {
        username: 'Azmat Khan',
        bannerImageUrl: process.env.PUBLIC_URL + './banner.jpg',
        userImageUrl: process.env.PUBLIC_URL + './Polish_20230308_172129121.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        // Add other profile data as needed
      };
  return (
    <div className="profile-container">
      <div className="banner" style={{ backgroundImage: `url(${profileData.bannerImageUrl})` }}></div>
      <div className="profile-info">
        <div className="user-section">
        <img className="user-image" src={profileData.userImageUrl} alt="User" />
          <div className="user-details">
            <h2 className="username">{profileData.username}</h2>
            <div className = "btn">
            <div className="user-buttons">
            <button className="follow-button">6482</button>
            <p className="follow-info">Followers</p>
            </div>
            <div className='user-buttons'>
              <button className="follow-button">248</button>
              <p className="follow-info">Followers</p>
            </div>
            </div>
          </div>
        </div>
        <div className='ceo'>
            <p className = 'ceo-p'>Co-founder & CEO at Terribly Tiny Tales</p>
            <a href="https://www.linkedin.com/in/azmatkhan99/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            https://www.linkedin.com/in/azmatkhan99/
            </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;