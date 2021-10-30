import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <section>
            <div className="container">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand logo" href="#">
                            <span style={{color: '#1F97D4'}}>Kin</span>
                            <span style={{color: '#ED078B'}}>der</span>
                            <span style={{color: '#FBCE0F'}}>gar</span>
                            <span style={{color: '#39DFE4'}}>ten</span>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto nav">
                                <li class="nav-item items">
                                    <Link class="nav-link" style={{color: '#423F8D'}} to="/">Home</Link>
                                </li>
                                <li class="nav-item items">
                                    <Link class="nav-link" style={{color: '#423F8D'}} to="/class">Class</Link>
                                </li>
                                <li class="nav-item items">
                                    <Link class="nav-link" style={{color: '#423F8D'}} to="/about">About</Link>
                                </li>
                                <li class="nav-item items">
                                    <Link class="nav-link" style={{color: '#423F8D'}} to="/blog">Blog</Link>
                                </li>
                                <li class="nav-item items">
                                    <Link class="nav-link" style={{color: '#423F8D'}} to="/contact">Contact</Link>
                                </li>
                                <li class="nav-item">
                                    <button className="enroll">Enroll Now</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;