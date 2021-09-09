import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Header = () => {
    return (
        
  <header> 
  <Navbar variant="dark" bg="primary " expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">Flipkart</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav  className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'/> Cart</Nav.Link>
        <Nav.Link href="/login"><i className='fas fa-user'/> Sign In</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 
</header>
       
    )
}

export default Header

