import React, { useState } from 'react';
import './Setting.css';

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: 'Oamogetswe',
    lastName: 'Makgopela',
    companyName: 'Capitec',
    email: 'opmakgopela@gmail.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="settings-container">
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h2>Update Personal Details:</h2>
          <div className="form-group">
            <label>First Name :</label>
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Last Name :</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Company Name :</label>
            <input 
              type="text" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Email address:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="section">
          <h2>Change Password:</h2>
          <div className="form-group">
            <label>Current Password:</label>
            <input 
              type="password" 
              name="currentPassword" 
              value={formData.currentPassword} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>New Password:</label>
            <input 
              type="password" 
              name="newPassword" 
              value={formData.newPassword} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Save</button>
          <button type="button">Logout</button>
        </div>
      </form>
    </div>
  );
};

export default Settings;