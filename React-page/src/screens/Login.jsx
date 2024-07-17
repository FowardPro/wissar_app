import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
function Login() {
    const user = [{ email: "kekana@gmail.com", password: '123zxc@Z' }, { email: 'nkosana@gmail.com', password: '123zxc@Z' }]

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const login = () => {
        var isFound = false;
        for (var k = 0; k < user.length; k++) {
            if (user[k].email === Email) {
                if(user[k].password === Password){ 
                    isFound=true;
                }
            }
        }

        if (isFound) {
            toast.success("Login successfully");
        }
        else {
            toast.warn("user not found");
        }


    }
    return (<div>
        <ToastContainer />
        <Header />
        <h2>Login</h2>
        <div className="form-group">
            <label>Email</label>
            <input type="email" onChange={(event) => setEmail(event.target.value)} className="control-form" />
        </div>
        <div className="form-group">
            <label>First name</label>
            <input type="password" onChange={(event) => setPassword(event.target.value)} className="control-form" />
        </div>
        <div className="form-group">
            <button onClick={login}>Login</button>
        </div>
    </div>);
}

export default Login;