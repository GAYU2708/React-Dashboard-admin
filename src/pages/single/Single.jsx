import React, { useEffect, useState } from 'react';
import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { userRows ,updateUserDetails} from "../../datatablesource.js";
import { Modal, Button, Input } from 'antd'; 

export default function Single() {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editedUserDetails, setEditedUserDetails] = useState(null);

    useEffect(() => {
        const findUserDetails = () => {
            const user = userRows.find(user => user.id === parseInt(userId));
            setUserDetails(user);
            setEditedUserDetails(user); 
        };
        findUserDetails();
    }, [userId]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSave = () => {
        setUserDetails(editedUserDetails);
        setIsModalVisible(false);
        updateUserDetails(editedUserDetails);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUserDetails({ ...editedUserDetails, [name]: value });
        console.log("Edited User Details:", editedUserDetails)
    };

    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top-s">
                    <div className="left-s">
                        <Button className="editbtn-s" onClick={showModal}>Edit</Button>
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
                                        <div className="itemValue-s" style={{ textAlign: "center", fontWeight: "bolder" }}>India</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="right-s">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom-s">
                    <h1 className="title-s">Last Transactions</h1>
                    <List  />
                </div>
            </div>

            <Modal
                title="Edit User Details"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="save" type="primary" onClick={handleSave}>
                        Save
                    </Button>
                ]}
            >
         {/*modal form input details of user to be edited  */}
                <Input
                    name="username"
                    value={editedUserDetails?.username}
                    onChange={handleChange}
                    placeholder="Username"
                    style={{ marginBottom: '1rem' }}
                />
                <Input
                    name="email"
                    value={editedUserDetails?.email}
                    onChange={handleChange}
                    placeholder="Email"
                    style={{ marginBottom: '1rem' }}
                />
                <Input
                    name="phone"
                    value={editedUserDetails?.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    style={{ marginBottom: '1rem' }}
                />
                <Input
                    name="address"
                    value={editedUserDetails?.address}
                    onChange={handleChange}
                    placeholder="Address"
                    style={{ marginBottom: '1rem' }}
                />
            </Modal>
        </div>
    )
}
