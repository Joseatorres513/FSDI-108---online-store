import { Link } from 'react-router-dom';
import './styles/navbar.css';

function Footer() {
    return (
        <div className="Footer">
            <h3>Created by: Jose_Torres</h3>
            <div className="social-icons">
                <Link to="http://localhost:3000/about" title="Facebook">📘</Link>
                <Link to="http://localhost:3000/about" title="Twitter">🐦</Link>
                <Link to="http://localhost:3000/about" title="Instagram">📸</Link>
            </div>
        </div>
    );
}

export default Footer;