import React, { useContext } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './profile.css';
import { DarkModeContext } from '../../contexts/darkModeContexts';

export default function Profile() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`profile ${darkMode ? 'dark' : ''}`}>
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className={`profileContent ${darkMode ? 'dark' : ''}`}>
          <img src="https://images.pexels.com/photos/2816544/pexels-photo-2816544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile" className="profileImage" />
          <div className={`profileDetailsBox ${darkMode ? 'dark' : ''}`}>
            <h2>PROFILE DETAILS</h2>
            <div className="profileDetails">
              <div className="grid-container">
                <div className="grid-item">Name:</div>
                <div className="grid-item">Rhythm</div>
                <div className="grid-item">Email:</div>
                <div className="grid-item">rhythm@gmail.com</div>
                <div className="grid-item">Contact Number:</div>
                <div className="grid-item">9874563210</div>
                <div className="grid-item">Address:</div>
                <div className="grid-item">Namakkal, Tamil Nadu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
