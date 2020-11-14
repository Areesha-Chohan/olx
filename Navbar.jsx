import React from 'react'
import { Container, Col, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import top from '../src/images/pic1.PNG'
import top2 from './images/pic2.jpg'
const Navbarr = () => {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">OLX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">


                    <Nav className="Nav">
                        <FormControl type="text" placeholder="Pakistan" className="control mr-sm-2 " />
                        <FormControl type="text" placeholder="Find Car,Mobile ,Phones and more ...." className="control1 mr-sm-2 ml-auto" />

                        <button bg="light" style={{ padding: 5, marginRight: 7, backgroundColor: "transparent", border: "none" }}>Log In</button>
                        <Button variant="outline-success " className="pr-5 pl-5">Sell</Button>
                    </Nav>






                </Navbar.Collapse>
            </Navbar>
            <Navbar bg="light" >
                <NavDropdown title="All Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                    <NavDropdown.Item href="">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="">Something</NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav className="mr-auto">
                    <Nav.Link className="fea" href="#home">Mobile Phones</Nav.Link>
                    <Nav.Link className="fea" href="#features">Car</Nav.Link>
                    <Nav.Link className="fea" href="#pricing">Motorcycles</Nav.Link>
                    <Nav.Link className="fea" href="#features"> Houses</Nav.Link>
                    <Nav.Link className="fea" href="#features">  TV - Video - Audio</Nav.Link>
                    <Nav.Link className="fea" href="#features">Tablets</Nav.Link>
                    <Nav.Link className="fea" href="#features">Land and Plots</Nav.Link>
                </Nav>

            </Navbar>


            <div>
                <img src={top} width="100%" />
                <img src={top2} width="100%" />

            </div>


        </>
    )

}

export default Navbarr