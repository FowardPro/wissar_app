import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Header from '../Header';
import image from '../../assets/photos/Image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Import the icon you want to use

function Login() {
    const user = [
        { email: "kekana@gmail.com", password: '123zxc@Z' },
        { email: 'nkosana@gmail.com', password: '123zxc@Z' }
    ];

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        let isFound = false;
        for (let k = 0; k < user.length; k++) {
            if (user[k].email === Email) {
                if (user[k].password === Password) {
                    isFound = true;
                    break; // Exit loop early if user is found
                }
            }
        }

        if (isFound) {
            toast.success("Login successful");
        } else {
            toast.warn("User not found");
        }
    }

    return (
        <div>
            <ToastContainer />
            <Header />
            <div className="loginPage">
                <div className="container">
                    <div className="imagediv">
                        <img src={image} alt='singer' />
                    </div>
                    <div className="formDiv">
                        <div className="headerWithIcon">
                            <FontAwesomeIcon icon={faUser} size="2x" className="loginIcon" />
                            <h1>LOGIN</h1>
                        </div>
                        <h1 className="eventOrganizer">Event Organizer</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="control-form"
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        <div className="form-group">
                            <p>Don't have an account? <Link to='/' className="nav_button">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
