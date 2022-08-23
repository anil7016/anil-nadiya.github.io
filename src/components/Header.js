import React from 'react';
import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return(
        <div className='mb-5' style={{background:'#e8f3f3'}}>
            <div>
                {/* <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">TMS</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar> */}
            </div>
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand">TMS</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto" style={{float:'right',position:'absolute',right:'0'}}>
                        <li className="nav-item d-flex">
                            <Link to="/blog" className="nav-link">Login</Link>
                            <Link to="/blog" className="nav-link"> / &nbsp; Sign Up</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default Header;