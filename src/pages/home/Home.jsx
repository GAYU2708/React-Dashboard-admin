import React from 'react';
import'./home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';
import Featured from '../../components/features/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table'

export default function Home() {


  return (
    <div className='home'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        {/* widgets components  */}
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        {/* chart component */}
        <div className="charts">
          <Featured/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>

        <div className='listContainer'>
          <div className="listTitle" >Latest Transanction</div>
          <Table/>
        </div>

      </div>
    </div>
  )
}
