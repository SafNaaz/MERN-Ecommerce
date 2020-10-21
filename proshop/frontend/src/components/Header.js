import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from '../actions/userActions'

const Header = () => {

  const dispatch = useDispatch()

  const {cart, userLogin} = useSelector((state) => state);
  const { cartItems } = cart;
  const { userInfo } = userLogin

  const logoutHandler = () =>{
    dispatch(logout())
  }

  const subTotal = cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.qty, 0) : 0

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
                {' '}<span>Cart</span>{subTotal > 0 ? `(${subTotal})` : null}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ): <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i> <span>Sign In</span>
              </Nav.Link>
            </LinkContainer>}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
