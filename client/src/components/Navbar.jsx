import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className="landing_nav">
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid nav_container">
                        <NavLink exact to="/" className="navbar-brand"><span className='nav_brand'>NEXTDRIO</span></NavLink>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav_collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <div className="navbar-nav">
                                    <NavLink exact to="/services" className="nav-item nav-link active"><span className='nav_item'>Services</span></NavLink>
                                    <NavLink exact to="/community" className="nav-item nav-link"><span className='nav_item'>Community</span></NavLink>
                                    <div className="nav-item dropdown">
                                        <NavLink exact to="/resource" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><span className='nav_item'>Resources</span></NavLink>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">Inbox</a>
                                            <a href="#" className="dropdown-item">Sent</a>
                                            <a href="#" className="dropdown-item">Drafts</a>
                                        </div>
                                    </div>
                                    <NavLink exact to="/about" className="nav-item nav-link" tabindex="-1"><span className='nav_item'>About</span></NavLink>
                                </div>
                                <NavLink exact to="/" className="nav-item nav-link"><span className='nav_item'>Login</span></NavLink>
                                <NavLink exact to="/" className="nav-item nav-link"><span className='nav_item' id='get_start'>GET STARTED</span></NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar