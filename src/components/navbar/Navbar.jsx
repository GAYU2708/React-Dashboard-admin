import React, { useContext } from 'react';
import './navbar.css';
import ManageSearchRoundedIcon from '@mui/icons-material/ManageSearchRounded';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkModeContext } from '../../contexts/darkModeContexts';

export default function Navbar() {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <ManageSearchRoundedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />English
          </div>
          <div className="item">
            {darkMode ? (
              <LightModeOutlinedIcon className='icon' onClick={toggleDarkMode} />
            ) : (
              <DarkModeIcon className='icon' onClick={toggleDarkMode} />
            )}
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListAltOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img src='https://images.pexels.com/photos/2816544/pexels-photo-2816544.jpeg?auto=compress&cs=tinysrgb&w=600' alt="profile" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  );
}
