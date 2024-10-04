//import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/NavBar.css";
import { Navbar, Container} from 'react-bootstrap';


const NavBar = () => {

  const navigate = useNavigate();


const handleNavigate = () =>{
  navigate('/')
}
    return (
        <Navbar className="header" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <div className="logo"></div>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <button
          className="botonNav"
          onClick={handleNavigate}
          >Home</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
    export default NavBar;