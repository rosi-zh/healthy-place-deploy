import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";

export default function Header() {
    const { isAuth } = useContext(AuthContext);

    return (
        <div className="container-fluid bg-white sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
                    <Link to={Path.Home} className="navbar-brand">
                        <img className="img-fluid" src="/img/logo.png" alt="Logo" />
                    </Link>
                    <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <NavLink to={Path.Home} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>Home</NavLink>
                            <NavLink to={Path.About} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>About</NavLink>
                            <NavLink to={Path.Contacts} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>Contacts</NavLink>
                            <NavLink to={Path.Articles} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>Articles</NavLink>
                            {!isAuth && (
                                <>
                                    <NavLink to={Path.Login} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>Login</NavLink>
                                    <NavLink to={Path.Register} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>Register</NavLink>
                                </>
                            )}
                            {isAuth && (
                                <>
                                    <NavLink to={Path.ArticleCreate} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>Create Article</NavLink>
                                    <NavLink to={Path.Profile} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>Profile</NavLink>
                                    <NavLink to={Path.Logout} className={`nav-item nav-link ${(isActive) => isActive ? 'active' : '' }`}>Logout</NavLink>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}