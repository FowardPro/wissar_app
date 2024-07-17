import { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Register() {
    const navigate = useNavigate();
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');

    function submit() {
        if (FirstName === '') {
            alert('Enter first name');
            return;
        }
        if (LastName === '') {
            alert('Enter last name');
            return;
        }
        if (Email === '') {
            alert('Enter email name');
            return;
        }
        var emailValidation = /\S+@\S+\.\S+/;
        if (!Email.match(emailValidation)) {
            alert('Enter valid email address');
            return;
        }
        var data = { FirstName, LastName, Email }
        console.log(data);
        navigate('/login')
    }
    return (
        <div>
            <Header />
            <h2>Register</h2>
            <div className="form-group">
                <label>First name</label>
                <input type="text" onChange={(event) => setFirstName(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <label>Last name</label>
                <input type="text" onChange={(event) => setLastName(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" onChange={(event) => setEmail(event.target.value)} className="control-form" />
            </div>
            <div className="form-group">
                <button onClick={() => submit()}>Submit</button>
            </div>
        </div>
    );
}

export default Register;