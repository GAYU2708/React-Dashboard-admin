import React,{useContext} from'react';
import './sidebar.css';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import FilterFramesTwoToneIcon from '@mui/icons-material/FilterFramesTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import AutoGraphTwoToneIcon from '@mui/icons-material/AutoGraphTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import SettingsSystemDaydreamTwoToneIcon from '@mui/icons-material/SettingsSystemDaydreamTwoTone';
import AssignmentIndTwoTone from '@mui/icons-material/AssignmentIndTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import {Link} from 'react-router-dom';
import { DarkModeContext } from '../../contexts/darkModeContexts';


export default function Sidebar() {

  const { dispatch } = useContext(DarkModeContext);


  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}}>
        <span className='logo'>Rhythm-Admin</span>
        </Link>
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardCustomizeIcon className='icons'/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className='icons'/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <Inventory2TwoToneIcon className='icons'/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <FilterFramesTwoToneIcon className='icons'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingTwoToneIcon className='icons'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AutoGraphTwoToneIcon className='icons'/>
            <span>Stats</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <NotificationsActiveTwoToneIcon className='icons'/>
            <span>Notification</span>
          </li>
          <li>
            <SettingsSystemDaydreamTwoToneIcon className='icons'/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyTwoToneIcon className='icons'/>
            <span>Logs</span>
          </li>
          <li>
          <SettingsSuggestTwoToneIcon className='icons'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AssignmentIndTwoTone className='icons'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutTwoToneIcon className='icons'/>
            <span>Logout</span>
          </li>

        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOptions" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOptions"  onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}
