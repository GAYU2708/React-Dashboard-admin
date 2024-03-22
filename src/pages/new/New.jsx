
import React, { useState } from 'react';
import './new.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

export default function New({ inputs, title, addUser }) {
  const [file, setFile] = useState('');
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({});
    setFile('');
    console.log(addUser);
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
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon-n" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      name={input.label.toLowerCase()} 
                      placeholder={input.placeholder}
                      value={formData[input.label.toLowerCase()] || ''}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
