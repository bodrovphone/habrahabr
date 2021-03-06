import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class NavbarInstance extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to='/'>
              <a>Home</a>
            </LinkContainer>

          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/posts'>
              <NavItem>Posts</NavItem>
            </LinkContainer>
            <LinkContainer to='/users'>
              <NavItem>Users</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

