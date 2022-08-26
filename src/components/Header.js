import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
import { history } from "../helpers/history";
// import AuthVerify from "./common/AuthVerify";
import EventBus from "../common/EventBus";

const Header = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
            setShowModeratorBoard(false);
            setShowAdminBoard(false);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, [currentUser, logOut]);

    return (
        <div className='mb-5' style={{ background: '#e8f3f3' }}>
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" to="/"></a>
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
                    {
                        currentUser ? (
                            <ul className="navbar-nav mr-auto" style={{ float: 'right', position: 'absolute', right: '0' }}>
                                <li className="nav-item d-flex">
                                    <Link to="/profile" className="nav-link"> {currentUser.username} </Link>
                                    <Link>
                                        <a href="/login" className="nav-link" onClick={logOut}> Logout </a>
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav mr-auto" style={{ float: 'right', position: 'absolute', right: '0' }}>
                                <li className="nav-item d-flex">
                                    <Link to="/login" className="nav-link">Login</Link>
                                    <Link to="/register" className="nav-link"> / &nbsp; Sign Up</Link>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
