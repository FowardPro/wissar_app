import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div id="header">
            <nav>
                <Link to='/login' className="nav_button">Login</Link>
                <Link to='/' className="nav_button">Register</Link>
            </nav>
        </div>
    );
}

export default Header;
