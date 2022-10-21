import React from "react";
import CartWidget from "./CartWidget.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar(){
    return (
        <>
        <header className="cabecera">
        <Navbar bg="success" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/icono.jpg"
              width="80"
              height="80"
              className="d-inline-block align-center"
            />{' '}
            Cerveceria Patagonia
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Cervezas</Nav.Link>
            <Nav.Link href="#features">Comprar</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>            
            
        </header>   
       
        </>
 )
}
export default NavBar