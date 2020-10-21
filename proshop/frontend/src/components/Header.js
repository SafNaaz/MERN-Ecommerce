import React from "react";
import {useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <header>
      <Navbar className="py-3" fixed="top" bg="dark" variant="dark" collapseOnSelect>
        <Container>{/* Moves brand etc in a proper width*/}
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">{/* Moves cart etc to left*/}
              <LinkContainer to="/cart">
                <Nav.Link>
                {cartItems.length === 0 ? <i className="fas fa-shopping-cart"></i> : <i className="fa fa-cart-plus"></i>}
                {' '}<span>Cart</span>{cartItems.length > 0 ? `(${cartItems.length})` : null}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> <span>Sign In</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
