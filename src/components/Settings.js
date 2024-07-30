// src/components/Settings.js
import React, { useState } from 'react';
import '../components/Setting.css';

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
    <div className="settings">
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h2>Update Personal Details:</h2>
          <label>
            First Name :
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Last Name :
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Company Name :
            <input 
              type="text" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Email address:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </label>
        </div>
        <div className="section">
          <h2>Change Password:</h2>
          <label>
            Current Password:
            <input 
              type="password" 
              name="currentPassword" 
              value={formData.currentPassword} 
              onChange={handleChange} 
            />
          </label>
          <label>
            New Password:
            <input 
              type="password" 
              name="newPassword" 
              value={formData.newPassword} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Confirm Password:
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
            />
          </label>
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
