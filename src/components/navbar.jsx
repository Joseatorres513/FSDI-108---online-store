import { useContext } from 'react'
import './styles/navbar.css';
import GlobalContext from '../state/globalContext';

import { Link } from 'react-router-dom';

function Navbar() {

    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Essentials</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        
                            <button className="btn btn-outline-success" to='/cart'>{user.name}</button>

                        <Link className="btn btn-outline-success" to='/cart'>
                            {cart.length}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}





export default Navbar;