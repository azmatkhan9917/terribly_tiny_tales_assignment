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
            <div className="user-buttons">
            <button className="follow-button">6482</button>
              <button className="follow-button">248</button>
            </div>
            
            <p className="follow-info">Followers Following</p>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;