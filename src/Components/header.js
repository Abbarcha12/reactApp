import React from 'react'
import './style.css'
import { Navbar } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


function header() {
    return (
        <div className="container-fluid col-12 ">
            <div className="row">
                <Navbar expand="lg" className='row col-12 nav'>
                    <Navbar.Brand href="#home" className="col-md-4 brand">TechZoid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="col-md-4 bg-dark"></div>
                        <Nav className="ml-auto col-md-8 link">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">contact</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default header
