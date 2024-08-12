import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link here
import './style.css';
import Header from '../Header';
// import image from './assets/Image.jpg';
import image from '../../assets/photos/Tyla_SignUp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Import an icon for registration

function Register() {
    const navigate = useNavigate();
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');

    function submit(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        if (FirstName === '') {
            alert('Enter first name');
            return;
        }
        if (LastName === '') {
            alert('Enter last name');
            return;
        }
        if (Email === '') {
            alert('Enter email address');
            return;
        }
        const emailValidation = /\S+@\S+\.\S+/;
        if (!Email.match(emailValidation)) {
            alert('Enter a valid email address');
            return;
        }

        const data = { FirstName, LastName, Email };
        console.log(data);
        navigate('/login');
    }

    return (
        <div>
            <Header />
            <div className="registerPage">
                <div className="container">
                    <div className="imagediv">
                        <img src={image} alt='singer' />
                    </div>
                    <div className="formDiv">
                        <div className="headerWithIcon">
                            <FontAwesomeIcon icon={faUserPlus} size="2x" className="registerIcon" />
                            <h2>CREATE ACCOUNT</h2>
                            <h1 className="eventOrganizer">Event Organizer</h1>
                        </div>
                        <form onSubmit={submit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    onChange={(event) => setFirstName(event.target.value)}
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    onChange={(event) => setLastName(event.target.value)}
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="stageName">Stage Name</label>
                                <input
                                    id="stageName"
                                    type="text"
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="genre">Genre</label>
                                <input
                                    id="genre"
                                    type="text"
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    type="text"
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="certifiedID">Upload Certified ID</label>
                                <input
                                    id="certifiedID"
                                    type="file"
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="affidavit">Upload Affidavit</label>
                                <input
                                    id="affidavit"
                                    type="file"
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                        <div className="form-group">
                            <p>Already have an account? <Link to='/login' className="nav_button">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
