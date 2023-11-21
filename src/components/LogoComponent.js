import React from 'react';
import './LogoComponent.css';

const LogoComponent = () => {
  return (
    <div className="logo-container1">
      <div className="logo-line">
        <div className="circular-container" style={{backgroundColor: 'blue'}}>
          {/* SVG of Star inside a circle */}
          <svg className = 'logo-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <p className="logo-text">125</p>
        <div className="circular-container"style={{backgroundColor: '#ffcc00'}}>
          {/* SVG of Thumbs Up inside a circle */}
          <svg className ='logo-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
        </div>
        <p className="logo-text">12</p>
        <div className="circular-container" style={{backgroundColor: 'grey'}}>
          {/* SVG of Eye inside a circle */}
          <svg className = 'logo-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <p className="logo-text">57.8K</p>
        <div className="circular-container" style={{backgroundColor: "#FF3659"}}>
          {/* SVG of Heart inside a circle */}
          <svg className = 'logo-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </div>
        <p className="logo-text">26.0K</p>
      </div>
      <div className="logo-line">
        <p className="posts-info">134 Posts</p>
        
      </div>
      
    </div>
    
  );
};

export default LogoComponent;
