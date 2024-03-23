import React from 'react';
import './list.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';




export default function List() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="list-Container">
        <Navbar/>
        <Datatable />
      </div>
    </div>
  )
}
