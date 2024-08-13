import React, { useState } from 'react';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assets/photos/ZTM trademark transparent.png'; // Adjust the path accordingly
import Longing from './Longing'; // Ensure the correct import of the Login component

const Registration = () => {
    const [showLogin, setShowLogin] = useState(false); // State to toggle between Registration and Login
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirmPassword
    const [firstName, setFirstName] = useState(''); // State for firstName
    const [lastName, setLastName] = useState(''); // State for lastName

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Confirm Password:', confirmPassword);
    };

    const handleLoginClick = () => {
        setShowLogin(true); // Show the Login component when the link is clicked
    };

    if (showLogin) {
        return <Longing />; // If showLogin is true, render the Login component
    }

    return (
        <div className='background_change'>
            <div className="registration-wrapper">
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image">
                            <img className='ztmlogo' src={image} alt="Side" />
                            <div className="text">
                                <p>The Best Artist Booking Site In <i>- Mzanzi</i></p>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="input-box">
                                <header>Create account</header>
                                <form onSubmit={handleSignUp}>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="firstname"
                                            required
                                            autoComplete="off"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <label htmlFor="firstname">First Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="lastName"
                                            required
                                            autoComplete="off"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <label htmlFor="lastName">Last Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="text"
                                            className="input"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="password"
                                            className="input"
                                            id="pass"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="pass">Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="password"
                                            className="input"
                                            id="confirmPassword"
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="submit" className="submit" value="Sign Up" />
                                    </div>
                                </form>
                                <div className="signin">
                                    <span>Already have an account? <a href="#" onClick={handleLoginClick}>Log in here</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
