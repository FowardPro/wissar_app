import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import './style.css'; // Assuming you've added styles as suggested previously

function Login() {
    const user = [{ email: "kekana@gmail.com", password: '123zxc@Z' }, { email: 'nkosana@gmail.com', password: '123zxc@Z' }];

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const login = () => {
        const foundUser = user.find(u => u.email === Email && u.password === Password);

        if (foundUser) {
            toast.success("Login successfully");
        } else {
            toast.warn("User not found");
        }
    };

    return (
        <div>
            <Header />
            <div className="login-container">
                <ToastContainer />
                <div className="login-form">
                    <h1>Sign in with Wissar</h1>
                    <div className="input-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                            className="control-form"
                            placeholder="Please enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            className="control-form"
                            placeholder="Please enter your password"
                        />
                    </div>
                    <div className="input-group">
                        <button onClick={login}>Login</button>
                    </div>
                    <p className="forgot-password">Forgot password?</p>
                    <p className="signup-link">Don’t have an account? <a href="#">Create one here.</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
