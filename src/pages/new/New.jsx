import React, { useState } from 'react';
import './new.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Form, Input, Button, Modal } from 'antd';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export default function New({ inputs, title, addUser }) {
  const [file, setFile] = useState('');
  const [formData, setFormData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalSubmit = () => {
  
    setTimeout(() => {
      addUser(formData);
      setFormData({});
      setFile('');
      setModalVisible(false);
      setStatus('success');
    }, 1000); 
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top-n">
          <h1>{title}</h1>
        </div>
        <div className="bottom-n">
          <div className="left-n">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt="library"
            />
          </div>
          <div className="right-n">
            <Form onFinish={handleModalSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon-n" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <Input
                    type={input.type}
                    name={input.label.toLowerCase()}
                    placeholder={input.placeholder}
                    value={formData[input.label.toLowerCase()] || ''}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </Form>
          
            {status === 'success' && <div style={{ color: 'green' }}>Form submitted successfully!</div>}
          </div>
        </div>
      </div>
      <Modal
        title="Confirm Submission"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleModalSubmit}>
            Submit
          </Button>,
        ]}
      >
        Are you sure you want to submit the form?
      </Modal>
    </div>
  );
}
