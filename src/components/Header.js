import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return(
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">TMS</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="d-flex">
                    <li className="p-1">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="p-1">
                    <Link to="/about">About</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;