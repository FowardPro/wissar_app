import React, { useState } from 'react';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button
import image from '../../assets/photos/Tyla_SignUp.jpg'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Registering from './Registration'; // Ensure the correct import of the Login component
//import organizeraccountdesktop from './OrganizerAccountDesktop';
const Longing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and registration forms
    const [showModal, setShowModal] = useState(false); // State for showing modal

    const navigate = useNavigate(); // Initialize the navigate function

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login Email:', email);
        console.log('Login Password:', password);

        // Validate the email and password
        if (email === 'Fowardnkuna6@gmail.com' && password === '123456') {
            // After successful login, navigate to the OrganizerAccountDesktop page
            navigate('/organizeraccountdesktop');
        } else {
            // Show the modal on invalid credentials
            setShowModal(true);
        }
    };

    const handleSignUpClick = () => {
        setIsSignUp(true); // Toggle to sign-up form
    };

    const handleCloseModal = () => setShowModal(false); // Close the modal

    if (isSignUp) {
        return <Registering />;
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Sign Up Email:', email);
        console.log('Sign Up Password:', password);

        // After successful sign-up, navigate to the OrganizerAccountDesktop page
        navigate('/organizeraccountdesktop');
    };

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
                                <header>{isSignUp ? 'Sign Up' : 'Log In'}</header>
                                <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
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
                                        <input type="submit" className="submit" value={isSignUp ? 'Sign Up' : 'Log In'} />
                                    </div>
                                </form>
                                <div className="signin">
                                    {isSignUp ? (
                                        <span>Already have an account? <a href="#" onClick={() => setIsSignUp(false)}>Log In here</a></span>
                                    ) : (
                                        <span>Do not have an account? <a href="#" onClick={handleSignUpClick}>Sign Up here</a></span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Invalid Credentials */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Invalid Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The email or password you entered is incorrect. Please try again.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Longing;
