import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Header = () => {
    return (
        
  <header> 
  <Navbar variant="dark" bg="primary " expand="lg" collapseOnSelect>
  <Container>
    <LinkContainer to='/'> 
    <Navbar.Brand>Flipkart</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav  className="justify-content-end" style={{ width: "100%" }}>
        <LinkContainer to='/cart'> 
        <Nav.Link><i className='fas fa-shopping-cart'/> Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
        <Nav.Link><i className='fas fa-user'/> Sign In</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 
</header>
       
    )
}

export default Header

