import { useState } from 'react';
import './register.css'; // Ensure this contains necessary overrides
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Ensure Header is properly styled

function Register() {
    const [activeTab, setActiveTab] = useState('event-organizer');
    const navigate = useNavigate();

    const validateForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const confirmEmail = form["confirmEmail"].value;
        const password = form.password.value;
        const confirmPassword = form["confirmPassword"].value;

        if (email !== confirmEmail) {
            alert("Emails do not match!");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Form submitted successfully!");
        // Optionally navigate to another route on success
        // navigate('/dashboard');
    };

    const renderForm = (userType) => (
        <form onSubmit={validateForm} className="p-3">
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="First Name" name="fname" required />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Last Name" name="lname" required />
            </div>
            {userType !== 'attendee' && (
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Company Name" name="company" />
                </div>
            )}
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" name="email" required />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Confirm Email Address" name="confirmEmail" required />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" name="password" required />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" required />
            </div>
            <div className="mb-3">
                <input type="file" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
    );

    return (
        <div className="container mt-5">
            <Header />
            <div className="btn-group mb-3" role="group" aria-label="User type tabs">
                <button type="button" className={`btn ${activeTab === 'event-organizer' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('event-organizer')}>Event Organizer</button>
                <button type="button" className={`btn ${activeTab === 'artist' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('artist')}>Artist</button>
                <button type="button" className={`btn ${activeTab === 'attendee' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setActiveTab('attendee')}>Attendee</button>
            </div>
            <div className="active form-section">
                {renderForm(activeTab)}
            </div>
        </div>
    );
}

export default Register;
