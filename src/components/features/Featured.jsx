import React from 'react';
import './featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

export default function Featured() {
  return (
    <div className='featured'>
        <div className="top-featured">
          <h1 className='title-featured'> Total Revenue</h1>
          <MoreVertIcon  className='icon-fetured' fontSize='small'/>
        </div>

        <div className="bottom-featured">
          <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
          </div>
          <p className="title-bar">Total sales made todat</p>
          <p className="amount-box">₹420</p>
          <p className="desc-box"> 
            Previous transactions processing. Last payments may not be included.
          </p>
          <div className="summary-featured">
          <div className="item-featured">
            <div className="itemTitle-fe">Target</div>
            <div className="itemResult-fe negative-fe">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount-fe">₹12.4k</div>
            </div>
          </div>
          <div className="item-featured">
            <div className="itemTitle-fe">Last Week</div>
            <div className="itemResult-fe positive-fe">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount-fe">₹12.4k</div>
            </div>
          </div>
          <div className="item-featured">
            <div className="itemTitle-fe">Last Month</div>
            <div className="itemResult-fe positive-fe">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount-fe">₹12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
