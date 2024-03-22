import React from 'react';
import './widgets.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

export default function Widgets({type}) {
    let data;

    //temporary
    const amount = 1000;
    const diff = 20;


switch (type) {
  case "user":
    data = {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: (
        <PersonOutlineOutlinedIcon
          className="icon-widget"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
          }}
        />
      ),
    };
    break;

  case "order":
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "View All Orders",
      icon: <ShoppingCartOutlinedIcon 
             className="icon-widget" 
             style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }} />,
    };
    break;

 case "earning":
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "View All Earnings",
      icon: <CurrencyRupeeOutlinedIcon className="icon-widget"  style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>,
    };
    break;
        
  case "balance":
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See Details",
      icon: (
        <AccountBalanceWalletOutlinedIcon
          className="icon-widget"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
          }}
        />
      ),
    };
    break;
  default:
    break;
};

  return (
    <div className='widget'>
        <div className="left">
            <span className='title-widget'> {data.title}</span>
            <span className='counter-widget'>{data.isMoney && "₹"}{amount}</span>
            <span className='link-widget'>{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive"> 
          <KeyboardArrowUpOutlinedIcon className='icon-widget'/>{diff}%
          </div>
            {data.icon}
        </div>
    </div>
  )
}
