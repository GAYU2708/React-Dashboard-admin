import React,{useEffect, useState} from 'react';
import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import {useParams} from "react-router-dom";
import{ userRows} from "../../datatablesource.js";


export default function Single() {

    const {userId} = useParams();
    const [userDetails,setUserDetails] = useState(null);

    useEffect( ()=> {


      const findUserDetails = () =>{
        const user =userRows.find(user => user.id === parseInt(userId));
        setUserDetails(user);
      };

      findUserDetails();
    },[userId])

  return (
    <div  className='single'>
        <Sidebar/>
      <div className="singleContainer">
         <Navbar/>
        <div className="top-s">
          <div className="left-s">
            <div className="editbtn-s">Edit</div>
            <h1 className="title-s">Information</h1>
              {userDetails && (
            <div className="item-s">
              <img src={userDetails.img} alt="" className="itemImg-s" />
                <div className="details-s">
                  <h1 className="itemTitle-s">{userDetails.username}</h1>
                  <div className="detailItem-s">
                    <div className="itemKey-s">Email:</div>
                    <div className="itemValue-s">{userDetails.email}</div>
                  </div>
                  <div className="detailItem-s">
                    <div className="itemKey-s">Phone:</div>
                    <div className="itemValue-s">{userDetails.phone}</div>
                  </div>
                  <div className="detailItem-s">
                    <div className="itemKey-s">Address:</div>
                    <div className="itemValue-s">{userDetails.address}</div>
                  </div>
                  <div className="detailItem-s">
                    <div className="itemKey-s">Country:</div>
                    <div className="itemValue-s" style={{textAlign:"center",fontWeight:"bolder"}}>India</div>
                  </div>
                </div>
            </div>
              )};
          </div>
          <div className="right-s">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom-s">
        <h1 className="title-s">Last Transactions</h1>
          <List/>
        </div>
      </div>

    </div>
  )
}
