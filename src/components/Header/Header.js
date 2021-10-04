import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark " expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">Educational Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Link to="/home" className="me-2 " >Home</Link>
                            <Link to="/services" className="me-2">Services</Link>
                            <Link to="/about" className="me-2">About Us</Link>
                            <Link to="/contact" className="me-2">Contact Us</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;