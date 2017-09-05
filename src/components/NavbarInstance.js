import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

export default class NavbarInstance extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="##">My Test React App
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="##" id="posts" onClick={this.props.conditionalRendering}>Posts</NavItem>
            <NavItem eventKey={2} href="##" id="users" onClick={this.props.conditionalRendering}>Users</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="##">Link Right</NavItem>
            <NavItem eventKey={2} href="##">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

