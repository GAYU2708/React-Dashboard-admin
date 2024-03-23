import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import './piechart.css';
import Navbar from '../navbar/Navbar';
import Chart from '../chart/Chart';

export default function Piechart() {
  return (
    <div className="piechart">
      <Sidebar />
      <div className="piechart-container">
        <Navbar />
       <div className='pie-container'>

          <Chart  aspect={3 / 1} title="User Spending ( Last 6 Months)"/>
       </div>
        
      </div>
    </div>
  );
}
